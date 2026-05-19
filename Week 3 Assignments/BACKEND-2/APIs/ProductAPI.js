/*REST API with below operations
     a. Create product
     b. Read all products
     c. Read a product by productId
     d. Update a product by productId
     e. Delete a product by productId*/

//Create min-express app(Separate Route)
import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'

export const productApp=exp.Router()

//REST Product API with below operations:
    //1) Create Product
    productApp.post("/products",async(req,res)=>
      {
        //get new user object from async
        const newProduct=req.body;
        //create new product document
        const newProductDocument=new ProductModel(newProduct);
        //save the document in mongodb and get the result
        const result=await newProductDocument.save();
        console.log("result:",result)
        //send response
        res.status(201).json({message:"Product Created"})
        })

    //2) Read All Products
    productApp.get("/products",async(req,res)=>
      {
        //read all products from db
        const productList=await ProductModel.find()
        if(!productList)
        {
            return res.json({message:"There are no products"})
        }
        //send products list to user
        res.json({message:"Products List:",payload:productList})
    })

    //3) Read a Product by productId
    productApp.get("/products/:productId",async(req,res)=>
      {
        //get product id from req
        const pid=req.params.productId;

        //find product by productId
        const productItem=await ProductModel.findOne({productId:pid});

        //If product not found
        if(!productItem)
        {
            //send product not found
            return res.status(404).json({message:"Product with "+pid+" not found"});
        }
        //If product found, 
        res.status(200).json({message:"Product:",payload:productItem});
    })

    //4) Update a product by productId
    productApp.put("/products",async(req,res)=>
      {
        //get modified product and product id from req
        const modifiedProduct=req.body;
        const pid=modifiedProduct.productId;

        //find product by Id
        const updatedProduct=await ProductModel.findOneAndUpdate({productId:pid},{... modifiedProduct},{new: true,runValidators: true});
        //If product not found
        if(!updatedProduct)
        {
            //send product not found
            return res.status(404).json({message:"Product with "+pid+" not found"});
        }
        //if product found, send res
        res.status(200).json({message:"Product Modified",payload:updatedProduct});
        })

    //5) Delete a product by productId
    productApp.delete("/products/:productId",async(req,res)=>
      {
        //get product id from req
        const pid=req.params.productId;

        //find product by Id and Delete
        const deletedProduct=await ProductModel.findOneAndDelete({productId:pid},{new: true})

        //If product not found
        if(!deletedProduct)
        {
            //send product not found
            return res.status(404).json({message:"Product with "+pid+" not found"});
        }
            res.status(200).json({message:"Product Deleted",payload:deletedProduct});
    })
import exp from 'express'
export const productApp = exp.Router()

// Create Product API
let products=[]

   // Create New Product ({productID,name,brand,price})
   productApp.post('/products',(req,res)=>
   {
     // Create new product
    let newProd = req.body
    // Push into Products
    products.push(newProd)
    // Send res
    res.json({message:"Product Created"})
   })   


   // Read all products
   productApp.get('/products',(req,res)=>
   { 
  res.json({message:"All Products",payload:products})
   })


   // Read all product by brand
   productApp.get('/products/:brand',(req,res)=>
   { 
     // Get Brand Name from url param
      let brandofURL=CharacterData(req.params.id)
    // Find Brand 
      let prodBrand=products.find(productObj=>productObj.brand==brandofURL)
    // if brand not found
      if(prodBrand==undefined)
      return res.json({message:"Brand not Found"})
    // Send res
     res.json({message:"The Brand",payload:prodBrand})
   })


   // Update a product
   productApp.get('/products',(req,res)=>
   {
     // Get modified product from client
     let modifiedProd = req.body
     // Find index of the product
     let index
   })

   // Delete a product by id
import {Schema,model} from "mongoose"

//Create Product Schema
const productSchema = new Schema
({
    productId:
    {
        type:String,
        required:[true, "Product ID is Required"],
        unique:[true, "Product ID Already existed"]


    },
    productName:
    {
        type:String,
        required:[true, "Product Name is Required"]
    },
    price:
    {
        type:Number,
        required:[true, "Price is Required"],
        min:[1000,"Minimum Price is 1000"],
        max:[5000000,"Minimum Price is 5000000"]
    },
    brand:
    {
        type:String,
        required:[true,"Brand of Product is Required"]
    }
},
{versionKey:false, timestamps:true}
);

// Generate ProductModel
export const ProductModel = model("product",productSchema)
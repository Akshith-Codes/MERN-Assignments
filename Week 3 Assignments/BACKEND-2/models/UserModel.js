import { Schema,model,Types } from "mongoose";

// Create Cart Schema{product, count}
const cartSchema = new Schema
({
        product:
        {
        type:Types.ObjectId,
        ref:"product" //Name of product model
        },
        count:
        {
            type:Number,
            default:1
        }

})

// Create User Schema 
const userSchema = new Schema
({
        username:
        {  
        type : String,
        required : [true, "Username is required"],
        minLength : [4,'Min Length of Username is 4 Chars'],
        maxLength : [6,'Username size exceed 6 chars']
        },
        password:
        {
            type:String,
            required:[true,'Password required']
        },
        email:
        {
            type:String,
            required:[true,'Email Required'],
            unique:[true,"Email already existed"]
        },
        age:
        {
            type:Number,
        },
        cart:[cartSchema],
},
{versionKey:false, timestamps:true}
);

// Generate UserModel
 export const UserModel = model("user",userSchema)
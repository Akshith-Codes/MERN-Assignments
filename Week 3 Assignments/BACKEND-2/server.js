//Create Express app

import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'

config() //process.env.PORT, process

const app = exp()

// body parser
app.use(exp.json())

// Cookie parser
   app.use(cookieParser())
//Forward req to UserAPI if path starts with /user-api
app.use("/user-api",userApp)

//Forward req to Product API if path starts with /user-api
app.use("/product-api",productApp)

const port=process.env.PORT || 4000


//Start Server
app.listen(4000,()=>console.log("Server on Port 4000..."))

//Connect to DB Server
async function connectDB()
{
    try
    {
    await connect(process.env.DB_URL);
    console.log("DB Connection Success")
    }
    catch(err)
    {
        console.log("Error in DB Connection :",err)
    }
}
connectDB() 

// error handling middleware 
app.use((err,req,res,next)=>
    {
        // Validation Error
        if(err.name == "ValidationError")
        {
            return res.status(400).json({message:"error occurred",err})
        }
        // Cast Error
        if(err.name == "CastError")
        {
            return res.status(400).json({message:"error occurred",err})
        }
        // Server Side error
      res.status(500).json({message:"error occurred",err})

    })

// error => {name, message, callstack}

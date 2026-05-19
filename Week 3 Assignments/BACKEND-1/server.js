//Create http server
import exp from 'express' ;
const app=exp();
import {userApp} from './APIs/UserAPI.js';
import {productApp} from './APIs/ProductAPI.js';


//use body parser middleware
app.use(exp.json())


//Custom middleware
function middleware1 (req, res, next)
{
// res.json({message:"This res from middleware1"})
// forward to next
console.log("Middleware1 excecuted")
next()
}

function middleware2 (req, res, next)
{
// res.json({message:"This res from middleware1"})
// forward to next
console.log("Middleware2 excecuted")
next()
}

//use middleware1
app.use(middleware1)
app.use(middleware2)

//set a port number
const port=6000;
app.listen(port,()=>console.log(`server listening to port ${port} ...`))  //used to assign port num to http server


// Forward Re to userAPI if path starts with user-api
app.use('/user-api',userApp)

// Forward Req to productAPI if path starts with product-api
app.use('/product-api',productApp)








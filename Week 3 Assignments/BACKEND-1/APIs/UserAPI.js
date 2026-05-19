//Create mini-express app(Separate Route)
import exp from 'express'
export const userApp = exp.Router()


//Test Data
let users=[]


// Route to handle GET req of client(http://localhost:6000/users)  path cannot be verb // They do not support body
userApp.get('/users',(req,res)=>
{
  // Read all users & Send Res
  res.json({message:"All Users",payload:users})
})



// Route to GET req frommID
userApp.get('/users/:id',(req,res)=>
{
  // Get ID of user for  url parameter
  let idofURL=Number(req.params.id)
  // Find User
  let userId=users.find(userObj=>userObj.id==idofURL)
  // if user not found
  if(userId==undefined)
     return res.json({message:"User not Found"})
  // Send res
     res.json({message:"A User",payload:userId})
})
      

// Route to handle POST req of client // They have body support
userApp.post('/users',(req,res)=>
{
     // Get user
     const newUser=req.body
     // Push user into users
     users.push(newUser)
     // send res
     res.json({message:"User Created"})
})


// Route to handle PUT req of client  // They have body support
userApp.put('/users',(req,res)=>
{
     // Get modified user from client 
     let modifiedUser = req.body;
     // Get index of existing user in users array
      let index = users.findIndex(userObj=>userObj.id==modifiedUser.id)
      // if user not found
      if (index==-1)
      {
          return res.json({message:"User Not Found"})
      }
     // Update user with index
     users.splice(index,1,modifiedUser)
     // Send res
      res.json({message:"User Updated"})
})

// Route to handle DELETE req of client // // They do not support body
userApp.delete('/users/:id',(req,res)=>
{
    // Get ID of user for  url parameter
  let idofURL=Number(req.params.id)
    // Find Index of user
    let index=users.findIndex(userObj=>userObj.id==idofURL)
    // if user not found
     if (index==-1)
      {
          return res.json({message:"User Not Found"})
      }
      // Delete user using splice
      users.splice(index,1)
      // Send res
      res.json({message:"User Deleted"})

})
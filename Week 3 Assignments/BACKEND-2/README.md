1. Generate package.json
2. Create Express server
3. Install Mongoose and connect MongoDb Server
    REST API ---- MongoDB native driver -->DB server
    REST API ---- MongoDB ODM Tool  -->DB server
4. Build REST API
    - Create User
    - Read all users
    - Read a user by ID
    - Upgrade a User by UD
    - Delete user nny ID
5. Create Schema and Mdoel of resoure(user)
6. Define Routes

# Refinement of the API
-> Handling unavailable resources:
      if(!userObj)
       {
        return res.status(404).json({message:"User Not Found"})
       }
        //send res
        res.status(200).json({message:"user",payload:userObj}) 

-> Validators during update:
        const updatedUser = await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})

-> Hashing the password
        //hash the password 
        const hashedPassword = await hash(newUser.password,10)
         //replace plain password
         newUser.password = hashedPassword
        
-> Unique Fields
        email:
        {
            type:String,
            required:[true,'Email Required'],
            unique:[true,"Email already existed"]
        },

-> Refined version of error handling middleware
  

## User Authentication(Login)
- Submit Credentials and get Token

    Req -------> Public Routes (By Anyone)
    Rew---Middleware-- - Protected Routes (By Authenticated users only)




To access cookies property of cookie object we need cookie parser middleware. Otherwise req.cookies is undefined

Cross Origin: 
. When the client and server applications are running in different domains.
. The token should be explicitly included in token request


Same Origin: 
. When the client and server applications are running in same domain of server.
. Cookies will send along with request automatically in same horizon request;




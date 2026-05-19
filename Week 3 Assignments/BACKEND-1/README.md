# Steps to create backend

1. Generate package.json file
      npm init -y

2. Create HTTP Server
    - Install & Import Express module
         npm install express
    - Import express module       

3. Create REST APIs

    - Resource based operations
    http:/l










Create employees collection and insert 5 emp documents with below


  Structure

       {
              empId:"",
              name:"",
              skills:[],
              experiences:[
                     {
                            companyName:",
                            yearsOfExp:"
                     }
              ]
       }


# Find emps with React skill
db.employees.find({skills:'React'})

# Add new skills "Express"
db.employees.updateMany({name:''},{$addToSet:{skills:'Express'}})

# Add new experince
db.employees.updateMany({name:''},{$set:{'experiences.dept':'Software Developer'}})

Delete first experince
Add address to emp whose name is "vikas"
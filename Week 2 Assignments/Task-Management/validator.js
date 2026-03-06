
  // TODO: Export these validation functions
                      
                    // 1. Validate task title (not empty, min 3 chars)
                    function validateTitle(title) 
                      {
                       if(!title)
                       {
                        return 'Empty Title'
                       }
                       if(title.length<3)
                        {
                        return 'Minimum 3 Characters required'
                        }
                        return 'Title is Valid'
                      }
                      
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) 
                      {
                       if(priority=='low' || priority=='medium' || priority=='high')
                       {
                        return 'Given Priority is Valid'
                       }
                        return 'Invalid Priority'
                       
                      }
                     
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) 
                      {
                        const currentDate = new Date();
                        if(date>currentDate)
                        {
                         return 'Given Due Date is Valid'
                        }
                         return 'Invalid Due Date'
                      }
                
                    
                      export {validateTitle,validatePriority,validateDueDate}

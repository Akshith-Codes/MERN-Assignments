import { validateTitle,validatePriority,validateDueDate } from './validator.mjs';

let tasks=[]

 // 1. Add new task
 function addTask(title, priority, dueDate) 
 {
 if(!validateTitle() && !validatePriority() && !validateDueDate())
 {
    return 'Invalid Task'
 }
 tasks.push({title, priority, dueDate})
 }
                    
 // 2. Get all tasks
 function getAllTasks()
 {
    return tasks
 }
                    
 // 3. Mark task as complete
  function completeTask(taskId)
  {
   return "The Given Task is Completed";
  }
  export{addTask,getAllTasks,completeTask}

                  // TODO: Import task functions


                  // import { ... } from './task.js';
                import{addTask,getAllTasks,completeTask} from './task.mjs';

                  // Test your module system
                  // 1. Add some tasks
                  addTask('Eating','high','2026-02-28')
                  addTask('Sleeping','high','2026-02-29')

                  // 2. Display all tasks
                  const taskList=getAllTasks()
                  console.log(taskList)

                  // 3. Complete a task
                  const taskDone=completeTask()
                  console.log(taskDone)

                  // 4. Display all tasks again
                  console.log(taskList)
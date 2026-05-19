/*import {create} from 'zustand'

export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
//add user state(name,age,email)
user:{name:"ravi",email:"ravi@mail.com",age:21},
//function to chnage email
changeEmail:()=>set({...user,email:"test@mail.com"}),
//function to vhange name and age
changeNameAndAge:()=>set({...user,name:"bhanu",age:30}),

    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //function to change newCounter to 500
    changeCounter:()=>set({newCounter:500}),
    //function to decrement newCounter1 by 20
    decrementCounter1:()=>(state=>({newCounter1:state.newCounter1-20}))
}))   */
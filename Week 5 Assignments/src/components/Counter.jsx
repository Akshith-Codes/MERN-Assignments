import { use,useState } from "react";
function Counter() {
    const [count,setCount]=useState (0);

    const increment=()=>{
        setCount(count+1);
    };
 const decrement=()=>{
        setCount(count-1);
    };
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl"> Count:{count}</h1>
            <button className="p-5 bg-green-500" onClick={increment}>+</button>
            <button className="p-5 bg-red-500" onClick={decrement}>-</button>
        </div>
    )
}
export default Counter
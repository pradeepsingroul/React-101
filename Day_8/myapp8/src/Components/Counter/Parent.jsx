import React from "react"
import Child from "./Child"

export default function Parent(){
    const [count,setCount] = React.useState(0);
    
    const IncreaseHandler = ()=>{
        setCount((val)=>val+1)
    }
    const decreaseHandler = ()=>{
        setCount((val)=>val-1)
    }
    
    return <div>
        <Child count={count}/>
        <button onClick={IncreaseHandler}>+</button>
        <button onClick={decreaseHandler}>-</button>
    </div>
}
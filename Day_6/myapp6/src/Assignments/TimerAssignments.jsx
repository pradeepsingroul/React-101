import React, { useEffect } from "react";



export function Timer(){
const [count,setCount] = React.useState(0)
    useEffect(()=>{
        setInterval(()=>{
            console.log("dfg")
            setCount((count)=>count+1);
        },1000)    
    },[])

    return <div>
        <h1>Count : {count}</h1>
    </div>

}
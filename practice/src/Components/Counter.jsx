import React, { useEffect } from "react";


export default function Counter(){
    const [count,setCount] = React.useState(0)

    
    const timer = useEffect(()=>{
        const id = setInterval(() => {
            // console.log('couner');
            setCount((val)=> {
               return val+1
            })
        }, 1000);
    },[])

    return <div>
        <h1>{count}</h1>
        <button >Start</button>
    </div>
}
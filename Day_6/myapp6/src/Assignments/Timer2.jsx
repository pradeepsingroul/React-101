import React, { useEffect } from "react";

export function Timer2(){
    const [count,setCount] = React.useState(0)

    useEffect(()=>{
        let timeOutId = setTimeout(() => {
            console.log('count increased....')
            setCount(count+1)
        }, 1000);
        if(count===5){
            clearTimeout(timeOutId)
        }
    })

    return <div>
        <h1>Count : {count}</h1>
    </div>
}
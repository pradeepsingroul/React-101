import React, { useEffect } from "react";


export function TimerWithGarbage(){
    const  [count,setCount] = React.useState(0);
    useEffect(()=>{
        let timer = setInterval(() => {
            console.log('dfg')
            setCount((count)=>{
                if(count===9){
                    clearInterval(timer);
                }
              return count+1;
            })
        }, 1000);
        
        return ()=>{
            clearInterval(timer)
        }


    },[])

    return <div>
        <h1>Count : {count}</h1>
    </div>
}
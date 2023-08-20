import React, { useEffect } from "react";

export function Timer(){
    const [val,setVal] = React.useState(0);
    useEffect(()=>{
        const id = setInterval(() => {
            setVal((valu)=>{
            if(valu===4){
                clearInterval(id);
            }
            console.log("ffff")
            return valu+1
            })
        }, 1000);
        
       
            return ()=>{
                console.log("cleanup is called")
                clearInterval(id)
            }
        
    },[])
    

    return <div>
        <h1>{val}</h1>
    </div>
   

}
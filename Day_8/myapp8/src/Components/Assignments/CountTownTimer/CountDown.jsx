import React, { useRef } from "react";
import Button from "./Button";
 
 
 export default function CountDown({initialValue}){

    const [init,setInit] = React.useState(initialValue);
    const ref = useRef(null);
    const onStart = ()=>{
        if(ref.current!=null) return;
        ref.current = setInterval(() => {
            setInit((val)=> {
                if(val<=1){
                    clearInterval(ref.current)
                }
                return val-1
        })
            
        }, 1000);

    }
    const onPause = ()=>{
       clearInterval(ref.current)
       ref.current = null;
    }
    const onReset = ()=>{
       setInit(initialValue)
       clearInterval(ref.current)
       ref.current = null;

    }


    return <div>

        <h1>{init}</h1>
        <Button lable="Start" handleFunciton={onStart}/>
        <Button lable="Pause" handleFunciton={onPause}/>
        <Button lable="Reset" handleFunciton={onReset}/>

    </div>
 }
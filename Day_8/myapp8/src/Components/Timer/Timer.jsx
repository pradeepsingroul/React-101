import React, { useRef, useState } from "react"
import Button from "./Button";



export default function Timer (){
const [time,setTime] = React.useState(0);
const timerReg = useRef(null)
const [pause,setPause] = useState(false);

const onStart = ()=>{
    if(timerReg.current!=null) return;
   timerReg.current = setInterval(()=>{
    setTime((tm)=> tm+1)
   },1000)
}
const onPause = ()=>{
    clearInterval(timerReg.current);
    setPause(!pause)
 }
 const onReset = ()=>{
    clearInterval(timerReg.current);
    setTime(0);
    timerReg.current=null;
 }

    return <div>
        <div>
            <h1>{time}</h1>
            <Button Handler={onStart} lable="Start"/>
            <Button Handler={onPause} lable = {pause ? "Resume" : "Pause"}/>
            <Button Handler={onReset} lable="Reset"/>
        </div>
    </div>
}
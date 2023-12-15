import React from "react";
import Button from "./Button";
// import { disable } from "colors";


export default function Counter(){
    const [count, setCount] = React.useState(0);
    const OnIncrease = ()=>{
        setCount(count+1)
        console.log('count', count);
    }
    const OnDecrease = ()=>{
        setCount(count-1)
        console.log('count', count);
    }
    const OnReset = ()=>{
        setCount(0)
    }

    return (
        <div>
            <h1>Hello I am Counter {count}</h1>
           <Button text= "Increse" handleChange={OnIncrease} />
           <Button text= "Decrese"handleChange={OnDecrease} />
           <Button text= "Reset" handleChange={OnReset} />

        </div>
    )
}
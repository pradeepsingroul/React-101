import React from "react";


export function Updater(){
    const [amount, setAmount] = React.useState(0);


    // const increaseCount = ()=>{
    //     setCount(count + 1)//states are async in nature
    //     setCount(count + 1)
    //     setCount(count + 2)
    //     console.log('count', count);
    // }

    // const increaseCount = (value)=>{
    //     setCount(count + value)
    //     setCount(count + value)
    //     setCount(count + value)
    //     console.log('count', count);
        
    // }
    const decreamentAmount = ()=>{
        setAmount(amount-100)
    }

    const increaseCount = ()=>{
        setAmount((val)=>{
            return val+100;
        })
        setAmount((val)=>{
            return val+100;
        })
        setAmount((val)=>{
            return val+100;
        })
    }

    return (
        <div>
            <h1>count : {amount}</h1>
            <button onClick={increaseCount}>INC</button>
            <button onClick={decreamentAmount}>INC</button>
        </div>
    )

}

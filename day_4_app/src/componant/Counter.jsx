import React from "react";

export default function Counter(){
    const [count,setCount] = React.useState(0)
    const handleInc = ()=>{
        // setCount(count+100);// 0+10 = 100 because it will rerender after complition of this function
        // setCount(count+100);// 0+10 = 100
        // setCount(count+100);// 0+10 = 100

        setCount((cou)=> cou+100)
        setCount((cou)=> cou+100)
        setCount((cou)=> cou+100)
        console.log('count andar', count);
    }
    console.log('count bahar', count);


    return <div>
        <h1>{count}</h1>
        <button onClick={handleInc}>Inc</button>
    </div>
}
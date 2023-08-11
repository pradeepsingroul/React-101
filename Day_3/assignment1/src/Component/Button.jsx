import React from "react";


export function Button(){
    const [count,setCount] = React.useState(0);

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={()=>{setCount(count + 1)}}>INC</button>
            <button onClick={()=>{setCount(count - 1)}}>DEC</button>
        </div>
    )

}
import React from "react";

export function Button(){
    const [count,setCount] = React.useState(0);
    return (
        //count is a current value 
        // setcounter is function which iupdate the value of count
          <div className="App">
           <h1>Count : {count}</h1>
           <button disabled={count >= 10} onClick={()=> setCount(count + 1)}>INC</button>
           <button disabled={count === 0} onClick={()=> setCount(count - 1)}>DEC</button>
           <button disabled={count === 0} onClick={()=> setCount(0)}>RESET</button>
          </div>
    )
}
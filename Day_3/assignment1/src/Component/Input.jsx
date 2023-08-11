import React from "react";


export function Input(){
    const [text,setText] = React.useState("");
    return (
        <>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={()=>{setText("")}}>ClEAR</button>
        <h1>{text}</h1>
        <br/>
        <br/>
        <hr/>
        </>
    )
}

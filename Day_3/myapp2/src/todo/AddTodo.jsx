import React from "react";

export function AddTodo({hndlr}){
    const[text,setText] = React.useState("");
    const onclick = ()=>{
        hndlr(text);
        setText("")
    };
    return (
        <div className="App">
            <input  onChange={(e)=>setText(e.target.value)} value={text}  placeholder="Enter Todo item" />
            <button onClick={onclick}>ADD</button>
        </div>
    )
}
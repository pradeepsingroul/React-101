import React from "react"

export function Todo(){
    const[text,setText] = React.useState(""); 
   const [todos,setTodos] = React.useState([]);

    const inputHandler = ()=>{
        const newObj  = {
            title:text,
            status:true
        }
        setTodos([...todos,newObj])

    };
    const listOfTodos = todos.map((it)=>{
        return (<li>{it.title}</li>)
    })

    return (
        <div>
            <div className="App">
                <input  onChange={(e)=>setText(e.target.value)} value={text}  placeholder="Enter Todo item" />
                <button onClick={inputHandler}>ADD</button>
                <ul>
                    <li>fgxfg</li>
                   {listOfTodos}
                </ul>
            </div>
        </div>
    )
}
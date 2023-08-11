import React from "react";

export default function Todo(){
    const [text, setText] = React.useState("");
    const [todos,setTodos] = React.useState([])
    const inputHandler = ()=>{
        const obj = {
            id:Math.random()+Date.now()+text,
            title:text,
            status:true,
        }

        setTodos([...todos,obj])
        setText("")
    }
    const listOfLists = todos.map((item)=>{
        return (<li>{item.title}</li>)
    })

    return(
        <>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={inputHandler}>ADD ITEM</button>
            <div>
                <ol>
                    {listOfLists}
                </ol>
            </div>
        
        
        </>
    )



}



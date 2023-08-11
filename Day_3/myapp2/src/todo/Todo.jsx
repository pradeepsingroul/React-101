import React from "react"
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";



export function Todo(){
   const [todos,setTodos] = React.useState([]);

    const inputHandler1 = (text)=>{
        const newObj  = {
            id:Math.random().toString()+Date.now()+text,
            title:text,
            status:true
        }
        setTodos([...todos,newObj])
        
    };
   
    return (
        <div>
            <AddTodo hndlr={inputHandler1}/>
            <TodoItem todos={todos}/>
         </div>
       
    )
}
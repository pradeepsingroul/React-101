import React from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./todoItem";
export default function Todo(){
    const [todos,setTodos] = React.useState([])
    // const iterate = todos.map((it) => <TodoItem text={it.name}/>)
    const onDelete = (key)=>{
        console.log('key', key);
        const dls = todos.filter((it)=>{
            return it.key!==key;
        })
        setTodos(dls)
    }
    
    const list = todos.map((item )=>{
        console.log('itedddm', item.key);
        return <>
            <TodoItem keyi={item.key} text={item.name}  onDelete={onDelete}/> 
        </>
    })

    return <div style={{border: "1px solid green",
    height:"600px",
    width: "300px",
    overflow:"scroll"}}>
        <AddTodo todos={todos} setTodos={setTodos}/>
        {list}
        {/* <TodoItem todos={todos} setTodos={setTodos}/> */}
    </div>
}
import React from "react";
import TaskItem from "../TaskItem";

export default function Task(){
    const [task, setTask] = React.useState("")
    const [todos, setTodos] = React.useState([])
    const [selTask, setSelTask] = React.useState("")
    const AddTaskHandler = ()=>{
        setTodos([...todos,task])
        setTask("")
    }
    const DeleteHandler = ()=>{
        const filtered = todos.filter((task)=>{
                return task!==selTask
        })
        setTodos(filtered);
    }
    
    return <div style={{
        border:"1px red solid",
        width:"300px",
        margin:"auto",
        backgroundColor:"teal"


    }}>
        <input type="text" placeholder="Enter task title" onChange={(e)=>{
            setTask(e.target.value)
        }} />
        <button onClick={AddTaskHandler}>Add</button>
        <TaskItem todos={todos} setSelTask={setSelTask} DeleteHandler={DeleteHandler}/>
        
    </div>
}
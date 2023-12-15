import React from "react";


export default function AddTodo({todos,setTodos}) {
    const [item, setItem] = React.useState("")

    const onAdd = () => {
        // todos.push(item)
        const obj = {
            key: Math.random(Date.now()),
            name: item,
            status: true

        }
        setTodos([...todos,obj])
        console.log('todos', todos);
        setItem("")
    }


    return (<>

        <input value={item} onChange={(e) => {
            setItem(e.target.value)
        }} type="text" />
        <h1>{item}</h1>
        <button onClick={onAdd}>Add</button>
    </>
    )
}

export function TodoItem({todos}){

    const listOfTodos = todos.map((it)=>{
        return (<li>{it.id}" : "{it.title}" : "{it.status ? "Completed" : "pending"}</li>)
    })
    return (
        <ul>
            <li>fgxfg</li>
            {listOfTodos}
        </ul>
    )
    
}
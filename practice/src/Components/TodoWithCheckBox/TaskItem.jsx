

export default function TaskItem({todos,setSelTask,DeleteHandler}){
    
    
    const mapping = todos.map((task)=>{
        
        return <div style={{
            display:"flex",
            justifyContent:"space-between",
            border: "1px red solid",
            height:"30px",
            marginTop:"20px",
            width:"200px",
            marginBottom:"10px",
            margin:"auto",
            alignItems:"center"
            
        }}>

            <input onChange={(e)=>{
                setSelTask(task)
                }} type="checkbox" />
            <p>{task}</p>
            <button>Edit</button>
            <button onClick={DeleteHandler}>Delete</button>
        </div>
        
    })

    return <>
        {mapping}
    </>
}
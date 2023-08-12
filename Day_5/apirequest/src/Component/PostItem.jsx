

export function PostItem({posts}){
    const display =  posts.map((postItem)=>{
        return <div key={postItem.id} style={{border : "1px solid grey", marginTop:"10px",boxShadow:"red"}}>
            <h2>{postItem.body}</h2>
            <p>{postItem.title}</p>
        </div>
    });  
    return  (<div>
                {display}
            </div>)
}
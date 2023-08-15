import React, { useEffect } from "react";



export  default function PagesUseEffect(){
    const [posts, setPosts] = React.useState([]);
    const [fetched, setFetched] = React.useState(true);
    const [page, setPage] = React.useState(1)
    
  
    useEffect(() =>{
        fetchPosts(page);
    },[page])
    const fetchPosts = async (page) => {
        // setFetched(false)
        let post = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
        post = await post.json();
        setPosts(post);
        setFetched(false);
    }
    const handlePages = (val = 1)=>{
        setPage(page+val)
    }
    if(fetched){
        return <h1>Loading : wait for a minutes</h1>
    }
    return <div>
        {posts.map((post) => {
           return <div key={Math.random()+Date.now()}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        })}
        <div style={{height:"40px",widows:"200px",margin:"auto",display:"flex"}}>
            <button disabled={page===1} onClick={()=>{handlePages(-1)}}>PREV</button>
            <h2>{page}</h2>
            <button onClick={()=>{handlePages(1)}}>NEXT</button>
        </div>
    </div>

}
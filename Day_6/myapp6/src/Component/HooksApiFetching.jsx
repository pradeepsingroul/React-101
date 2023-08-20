import React, { useEffect } from "react";

export default function Posts(){
    const [loading,setLoading] = React.useState(true)
    const [posts,setPosts] = React.useState([]);
    // using useEffest()
    useEffect(()=>{fetchedData();},[])
    const fetchedData = async () =>{
        let data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`)
        data = await data.json();
        // return data;
        setPosts(data)
        setLoading(false);
     } 
     if(loading){
        return <div>Loading... please wait for a sec it takes few seconds</div>
     }
     return <>
        {/* <button style={{marginTop:"35px"}} onClick={fetchedData}>getPost</button> */}
        <div>
            {posts.map((post)=>{
                return <div key={Math.random()+Date.now+""} style={{marginTop:"25px", border:"1px red solid"}}>
                        <p>{post.body}</p>
                        <p>{post.title}</p>
                    </div>
            })}
        </div>
     </>

}

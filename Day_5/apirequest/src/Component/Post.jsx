import React from "react";
import { PostItem } from "./PostItem";


// write a function to get the data from the endpoints
export function Post(){
    const [post,setPost] = React.useState([])

    // .then function using es6
    // const getPostFromApi = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    //     .then((res)=> res.json())
    //     .then((res)=> {
    //         setPost(res)//using state to set the data in state variables
    //     })
    // };

    // async await funciton using es6
    const getPostFromApi = async ()=>{
        let data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
        data = await data.json();
        setPost(data)
    }

    //fetching api using normal function
    // async function getPostFromApi(){
    // let data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    // data = await data.json();
    // setPost(data)
    // }

    console.log(post)
    return (
        <div>
            {/* writting event handler for click event */}
            <button onClick={getPostFromApi}>Get Post</button>
            {/* displaying data which i got from the endpoint */}
            <PostItem posts={post}/>
            
            
        </div>
    )
}


import React from "react";
import PostItem from "./PostItem";
import Loading from "./Loading";

export default function FetchApi(){
    const [page,setPage] = React.useState(1);
    const [posts,setPosts] = React.useState([]);
    const[fetched,setFetched] = React.useState(false)
    React.useEffect(()=>{
        fetchPosts()
    },[page])

    const fetchPosts = async ()=>{
        setFetched(false)
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
        const fData = await data.json();
        setPosts(fData)
        console.log('fData', fData);
        setFetched(true)
    }

    const handlepage = ()=>{
        setPage((val)=> val+1)
    }
    

    const rendering = posts.map((item)=>{
        return <PostItem key={Math.random()*Date.now()} title={item.title} body={item.body}/>
    })
    const rendering1 = posts.map((item)=>{
        return <PostItem key={Math.random()*Date.now()} />
    })
    return <div>
        <button onClick={handlepage}>Inc</button>
        {fetched ? rendering : rendering1}
    </div>
}
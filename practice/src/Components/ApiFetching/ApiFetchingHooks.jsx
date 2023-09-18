import React from "react";

export default function ApiFetch(){
    const [page, setPage] = React.useState(0)
    const [loading, setLoading] = React.useState(true)
    const [posts, setPosts] = React.useState([])

    React.useEffect(()=>{
        console.log('useEffect');
        fetchedPosts(page)
    },[page])

    const fetchedPosts = async (page)=>{
        let psts = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
        psts = await psts.json()
        setPosts(psts)
        setLoading(false)
    }
    const nextPosts= ()=>{
        console.log('nextPosts');
        setPage(()=> page+1)
    }
    const previousPosts= ()=>{
        console.log('previousPosts');
        setPage(()=> page-1)
    }
    if(loading){
        return <h1>Posts are loading please wait....</h1>
    }

    return <div>
        <div>
            {posts.map((item)=>{
                return <>
                <div style={{
                    border:"1ps red solid",
                    background: "grey"
                }}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
                </>
            })}
        </div>

        <button onClick={nextPosts} >Next</button>
        <h2>{page}</h2>
        <button disabled={page===0} onClick={previousPosts}>Previous</button>
    </div>


}




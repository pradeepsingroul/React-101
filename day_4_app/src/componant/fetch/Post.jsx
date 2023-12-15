import React from "react";
import PostItem from "./PostItem";
import Loading from "./Loading";

export default function Posts() {
    const [post, setPost] = React.useState([]);
    const [rendered, setRendered] = React.useState(false);
    const getPost = async () => {
        setRendered(true)
        const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        //    console.log('data', data);
        const final = await data.json();
        console.log('final', final);
        setPost(final)
        setRendered(false)

    }

    const postsRendering = post.map((item) => {
        return <PostItem key={item.id} title={item.title} body={item.body}/>
    })

    return <div>
        <button onClick={getPost}>Get Posts</button>
        {rendered ? <Loading/> :  postsRendering}
    </div>


 
   
}
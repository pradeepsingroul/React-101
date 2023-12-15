import React from "react";

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
        return <li style={{
            border: '1px red solid',
            height: "60px",
            width: "auto"
        }} key={item.id}>{item.title}</li>
    })


    return <div>
        <button onClick={getPost}>Get Posts</button>
        {rendered ? <h1>Loading...</h1> : <ul>
            {postsRendering}
        </ul>}
    </div>
}
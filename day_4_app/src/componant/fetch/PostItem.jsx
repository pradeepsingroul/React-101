


export default function PostItem({title,body}){



    return <div style={{
        border: '1px red solid',
        height: "60px",
        width: "auto"
    }}>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
}
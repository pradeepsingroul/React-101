


export default function PostItem({title,body}){


    return <div style={{
        border:"1px red solid",
        height: "auto",
        // width:"auto",
        marginTop:"10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }}>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
}
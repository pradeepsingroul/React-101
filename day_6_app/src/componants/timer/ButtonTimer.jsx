import React from "react";
import Timer from "./Timer";


export default function ButtonTimer(){
    const [show,setShow] = React.useState(true);


    return <div>
        
        {show? <Timer show={show}/> : null}
        <button onClick={()=>{
            setShow(!show);
        }}>{show ? "show timer" : "hide timer"}</button>
    </div>
}
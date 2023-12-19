import React from "react";

export default function Input(){
    const inputRef = React.useRef(null)

    const HandleFocus = ()=>{
        inputRef.current.focus();
    }

    return <div>
        <input ref={inputRef} />
        <button onClick={HandleFocus}>Foucus</button>
    </div>
}
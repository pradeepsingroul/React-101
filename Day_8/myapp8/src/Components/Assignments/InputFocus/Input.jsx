import React from "react"
import { useRef } from "react"



export default function Input(){

    const Inputref = useRef(null)


    return <div>
        <div>
        <input ref={Inputref}  />
        <button style={{marginTop:"50px"}}>Focus</button>
        </div>
   </div>

}
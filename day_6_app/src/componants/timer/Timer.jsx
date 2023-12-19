import React, { useEffect } from "react";





export default function Timer({show}) {
    const [val, setVal] = React.useState(0);
    

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setVal((count) => {
                if (count >= 18) {
                    clearInterval(intervalId)
                }
                return count + 1
            })
            console.log("val: ", val)
        }, 1000);

        const cleanUp = ()=>{
            console.log("clean up is called....")
        }
        return cleanUp;
        // console.log("valbahar: ", val)

    }, [show])
    


    return <div style={{
        border: "1px red solid",
        height: "auto",
        // width:"auto",
        marginTop: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }} >
        <h1>Timer: {val}</h1>
        
        
    </div>
}
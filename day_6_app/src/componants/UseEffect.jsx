
import React from "react"

export default function UseEffect() {
    const [count, setCount] = React.useState(0);
    

    React.useEffect(() => {
        console.log("Andar hu mai")
    }, [])
    //when dependency array will be emplty then it will call only once at the time of rendering
    //if we pass some value then it will call only when that value changes
    //it we did not specify dependency array then it will call every time when rendering will happens


    console.log("BAhar hu mai")


    return <div>
        <h1>Hey! I am Pradeep Singroul</h1>
        <p>Edit here to see some magics...</p>
        <h1>{count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>Inc</button>
    </div>
}
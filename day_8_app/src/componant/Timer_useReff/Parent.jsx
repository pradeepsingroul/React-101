import React from "react";
import Button from "./Button";

export default function Parent() {
    const [count, setCount] = React.useState(0);
    const timereff = React.useRef()
    console.log('timereff', timereff);

    const handleChangeStart = () => {
        if(timereff.current) return
        timereff.current = setInterval(() => {
            console.log(count)
            setCount((coun) => coun+1)
        }, 1000);
    }
    const handleChangePause = () => {
        clearInterval(timereff.current)
        timereff.current = null

    }
    const handleChangeReset = () => {
        clearInterval(timereff.current)
        timereff.current = null
        setCount(0);

    }



    return <div>
        <h1>Here is Count: {count}</h1>
        <Button lable="Start" handleChange={handleChangeStart} />
        <Button lable="Pause" handleChange={handleChangePause} />
        <Button lable="Reset" handleChange={handleChangeReset} />
    </div>


}
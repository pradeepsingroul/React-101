import React from "react";


export default function Video() {
    const videRef = React.useRef(null);

    const HandlePlay = () => {
        videRef.current.play()
    }
    const HanldePause = () => {
        videRef.current.pause()
    }


    return <div style={{
        border: "1px red solid",



    }}>
        <video style={{height:"300px", width:"auto"}} ref={videRef} src="https://player.vimeo.com/external/371825162.sd.mp4?s=000d23b93eff207fdfded143a87623285af15c1b&profile_id=164&oauth2_token_id=57447761"></video>
        <div> 
            <button onClick={HandlePlay}>Start</button>
            <button onClick={HanldePause}>Pause</button>
        </div>
    </div>
}
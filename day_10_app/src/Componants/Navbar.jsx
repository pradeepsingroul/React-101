import { Link } from "react-router-dom";


export default function Navbar() {


    return <div style={{display:"Flex", gap:"10px",margin: "auto", justifyContent:"center"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={"/users"}>User</Link>
    </div>
}
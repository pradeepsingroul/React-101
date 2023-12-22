import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/AuthContextProvider";


export default function Navbar() {
    const {isAuth} = useContext(AuthContext)


    return <div style={{display:"Flex", gap:"10px",margin: "auto", justifyContent:"center"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={"/users"}>User</Link>
        {!isAuth ? <Link to={"/login"}>login</Link> : <Link to={"/logout"}>logout</Link>}
        {/* <Link to={"/login"}>login</Link> */}
    </div>
}
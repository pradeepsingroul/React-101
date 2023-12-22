import { useContext } from "react";
import { AuthContext } from "./Context/AuthContextProvider";

export default function LoginButton(){
    const auth = useContext(AuthContext)

    return <button onClick={auth.onLogin}>Login</button>
}
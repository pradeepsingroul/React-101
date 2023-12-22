import { useContext } from "react";
import { AuthContext } from "./Context/AuthContextProvider";

export default function LogoutButton(){
    
    const auth = useContext(AuthContext)

    return <button onClick={auth.onLogout}>Logout</button>

}
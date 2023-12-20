import { useContext } from "react"
import { AppContext } from "../Context/AppContextProvide"


export default function LoginHandler(){
    const value = useContext(AppContext)
    // console.log('value', value);
    



    return <div>
        <h1>{value.data.status ? value.data.name : "You are logged out"}</h1>
        <button onClick={value.OnLogin}>{value.data.status ? "Logout" : "Login"}</button>
    </div>
}
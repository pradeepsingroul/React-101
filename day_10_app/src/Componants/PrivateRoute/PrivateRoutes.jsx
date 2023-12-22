import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
// import { Navigate } from "react-router-dom";/
import LoginButton from "../LoginButton";

export default function PrivateRoute({ children }) {
    const Auth = useContext(AuthContext)
    console.log('Auth', Auth);

    if (!Auth.isAuth) {
        return <LoginButton />
    }
    return <div>
        {children}
        <button onClick={Auth.onLogout}>LogOut</button>
    </div>
}
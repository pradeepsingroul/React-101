import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({children}){

    const[isAuth,setIsAuth] = React.useState(false)
    const onLogin = ()=>{
        setIsAuth(true)
        alert("Login successfully....")
    }
    const onLogout = ()=>{
        setIsAuth(false)
        alert("Logout succussfully...")
    }
    const values = {isAuth,onLogin,onLogout}

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
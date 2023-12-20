
// there are three way to create and use Context Api
// create --> provide --> consume

import React, { useState } from "react";

export const AppContext = React.createContext()


export default function AppContextProvider({children}){
    
    const [data,setData] = useState({
        status:true,
        name: "Pradeep",
        password: "Password"
    })
   
    const OnLogin = ()=>{
        // const obj  = {status: false};
       setData({...data,status: !data.status})
       console.log('data', data);

    }


return <AppContext.Provider value={{data,OnLogin}}>{children} </AppContext.Provider>

}
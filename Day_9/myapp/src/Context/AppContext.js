import React from "react";
import App from "../App";


export const AppContext = React.createContext();

AppContext.displayName = "My context"


export default function AppContextProvider({childern}){
    return <AppContext.Provider value={"DATA"}>
        {childern}
    </AppContext.Provider>
}
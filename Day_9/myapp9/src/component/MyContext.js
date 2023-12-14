import React from "react";


//create step
export const MyContext = React.createContext()

MyContext.displayName = "My context"


// provide
export function MyAppContextProvider({children}){
    return(
        <MyContext.Provider value={"DATA"}>
            {children}
        </MyContext.Provider>
    )
}


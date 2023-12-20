
// there are three way to create and use Context Api
// create --> provide --> consume

import React from "react";

export const AppContext = React.createContext()


export default function AppContextProvider({children}){

return <AppContext.Provider value={{text: "Hello, I am Pradeep"}}>{children} </AppContext.Provider>

}
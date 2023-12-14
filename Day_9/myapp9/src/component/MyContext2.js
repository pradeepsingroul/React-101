import React from "react"

export const MyContext2 = React.createContext()

export function MyContext2Provider({children}){
    const value = {
        text: "pradeep Singroul",
        count: 1
    }
    return (
        <MyContext2.Provider value={value}>
            {children}
        </MyContext2.Provider>
    )
}
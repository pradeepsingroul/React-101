import { useReducer } from "react"
import Reducer, { initState } from "./Reducer"


export default function CounterUsingReducer(){
  
    const [state, dispatch] = useReducer(Reducer, initState)

    console.log("Trigered")
    return  <div>
        <h1>{state.amount}</h1>
        <button onClick={()=> dispatch({type: "INCREASE", amount: 100})}>INC</button>
        <button onClick={()=> dispatch({type: "DECREASE", amount: 100})}>DEC</button>
    </div>
}
import { useEffect, useReducer } from "react";
import GetUserReducer, { actionType, initState } from "../Reducer/Reducer";



export default function User(){



     const [state,dispatch] = useReducer(GetUserReducer,initState)
     console.log('state', state);

    useEffect(()=>{
        dispatch({type: actionType.LOADING})
        fetchUsers()

        // console.log('user', user);
        
        
    },[])

     function fetchUsers(){
       
        try {
            // console.log("Hello i am trying to fetch")
             fetch(`https://reqres.in/api/users`)
            .then(response => response.json())
            .then(response => dispatch({type: actionType.SUCCESS, payload: response}))
            .catch(error => {
                console.log(error)
            })
           
            
        } catch (error) {
            console.log('error', error);
            dispatch({type: actionType.FAILURE})
        }
        
    }

    // console.log()
    if(state.isLoading){
        return <h1>Loading....</h1>
    }
    if(state.isError){
        return <h1>Somethink went wrong...</h1>
    }
    return <div>
        {state.data.map((item)=>{
            return <p key={item.id}>{item.email}</p>
        })}
    </div>

}
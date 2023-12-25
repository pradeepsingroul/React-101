export const actionType = {
    "LOADING":  "LOADING",
    "SUCCESS": "SUCCESS",
    "FAILURE": "FAILURE"
}

export const initState = {
    data: [],
    isLoading: true,
    isError: false
}

export default function GetUserReducer(state,action){

    switch (action.type) {
        case actionType.LOADING:
            return {...state,isLoading: true,isError: false}
        case actionType.SUCCESS:
            console.log("helloa",action.payload)
            return {...state,isLoading: false,data: action.payload.data}
        case actionType.FAILURE:
            return {...state,isLoading: false,isError: true}
        default:
            break;
    }
}
export const initState = {amount:100};

export default function Reducer(state,action){
    console.log('action', action);
    console.log('state', state);
    switch (action.type) {
        case "INCREASE":
            return {...state, amount: state.amount+action.amount};
        case "DECREASE":
            return {...state, amount: state.amount-action.amount};
        default:
            break;
    }
}
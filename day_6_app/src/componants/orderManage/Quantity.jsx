

export default function Quantity({keyDi, quantity,HandleInc,HandleDec }) {

    return <div>
        <button onClick={()=> HandleDec(keyDi)}>-</button>
        <div>{quantity}</div>
        <button onClick={()=> HandleInc(keyDi)}>+</button>
    </div>
}
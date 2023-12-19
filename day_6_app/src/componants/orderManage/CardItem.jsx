import LableItem from "./LableItem";
import Quantity from "./Quantity";



export default function CardItem({keyDi,name,price,quantity,HandleInc,HandleDec}){
console.log('key', keyDi);



    return <div>
        <LableItem name={name} price={price}/>
        <Quantity keyDi={keyDi} quantity={quantity} HandleInc={HandleInc} HandleDec={HandleDec}/>
    </div>
}
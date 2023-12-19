import React from "react";
import CardItem from "./CardItem";
import Total from "./Total";



export default function CardContainer(){
    const [sum,setSum] = React.useState(0);
    const items = [
        { key: 1, name: "Noodle", price: 30, quantity: 0 },
        { key: 2, name: "Biryani", price: 90, quantity: 0 },
        { key: 3, name: "Chips", price: 10, quantity: 0 },
    ]
    const [data, setData] = React.useState(items);
    const HandleInc = (key) => {
        console.log('id', key);
        
        const mapped = data.map((item) => {
            if (item.key === key) {
                item.quantity = item.quantity + 1;
                setSum(()=>{
                    console.log("sum")
                    return sum+item.price
                })
            }
            
            
            return item;
        })
        setData(mapped)
        // console.log(sum)
        
       
    }
    const HandleDec = (id) => {
        console.log('id', id);
        
       const mapped = data.map((item) => {
            if (item.key === id) {
                item.quantity = item.quantity - 1;
                setSum(()=>{
                    console.log("sum")
                    return sum-item.price
                })
            }
            
            return item;
        })
        setData(mapped)
        // console.log(sum)
       
    }



    return <div>
        {
            data.map((item)=>{
                return <CardItem keyDi={item.key} name={item.name} price={item.price} quantity={item.quantity} HandleInc={HandleInc} HandleDec={HandleDec}/>
            })
        }
        <Total sum={sum}/>
    </div>
}
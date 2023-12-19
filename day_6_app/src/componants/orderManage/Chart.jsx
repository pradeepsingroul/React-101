import React from "react";

export default function Chart() {
    const [sum,setSum] = React.useState(0);
    const items = [
        { key: 1, name: "Noodle", price: 30, quantity: 0 },
        { key: 2, name: "Biryani", price: 90, quantity: 0 },
        { key: 3, name: "Chips", price: 10, quantity: 0 },
    ]
    const [data, setData] = React.useState(items);

    const HandleInc = (id) => {
        
        const mapped = data.map((item) => {
            if (item.key == id) {
                item.quantity = item.quantity + 1;
                setSum(()=>{
                    return sum+item.price;
                })
            }
            
            return item;
        })
        
        setData(mapped)
    }
    const HandleDec = (id) => {
        
        const mapped = data.map((item) => {
            if (item.key == id) {
                item.quantity = item.quantity - 1;
                setSum(()=>{
                    return sum-item.price;
                })
            }
           
            return item;
        })
        
        setData(mapped)
    }

    const iterate = data.map((item) => {
        return <div style={{marginTop:"10px",border:"1px red solid",height:"40px" ,display:"flex", justifyContent:"space-around"}} key={item.key}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div style={{display:"flex",height:"40px"}}>
                <button disabled={item.quantity<=0 ? true : false} onClick={() => HandleDec(item.key)}>-</button>
                <div>{item.quantity}</div>
                <button onClick={() => HandleInc(item.key)}>+</button>
            </div>

        </div>
    })


    return <div>
        {iterate}
        <h1>{sum}</h1>
    </div>
}
import React from "react"
import { Item } from "./Item"

export function Cart({}){
    const [items,setItems] = React.useState([
    {id:1,title:"Noodles",price:30,quantity:0,total:0},
    {id:2,title:"Biryani",price:90,quantity:0,total:0},
    {id:3,title:"Maggie",price:10,quantity:0,total:0}])
    
    // setItems((it)=>{[...it,details]})
    const sum = items.reduce((init,val)=>{
        // console.log(val.price,val.quantity,val.total)
        return init + val.quantity*val.price ;
    },0)
    const DecreaseUpdater = (key)=>{
        const itemss = items.map((it)=>{
            if(key===it.id){
                it.quantity = it.quantity-1;
                it.total = it.price*it.quantity;
                return it;
            }else{
                return it;
            }
        })
        setItems(itemss)
    }
    const IncreaseUpdater = (key)=>{
       const itemss = items.map((it)=>{
            if(key===it.id){
                it.quantity = it.quantity+1;
                it.total = it.price*it.quantity;
                // console.log(it.quantity)
               
                
            }
            return it;
        })
        // console.log(itemss)
       setItems(itemss)
    }
    const mapping = items.map((item)=>{
        return <Item key={Math.random()}  id={item.id} title={item.title} price={item.price} quantity={item.quantity} IncreaseUpdater={IncreaseUpdater} DecreaseUpdater={DecreaseUpdater} />
    })

    return <>
    
     {mapping}
    <div style={{marginTop:"25px", border:"1px teal solid",backgroundColor:"teal"}}>
    <h1>Total : {sum}</h1>
    </div>
    
    </>
    
}
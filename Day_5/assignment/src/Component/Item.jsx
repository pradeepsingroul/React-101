import React from "react";

export function Item({id,title,quantity,price,IncreaseUpdater,DecreaseUpdater}){
    // console.log(id)
    return <><div style={{alignItems:'center',justifyContent:"space-around", display:"flex",border:"1px red solid",marginTop:"25px"}}>
    <h1>{title}</h1>
    <h1>{price}</h1>
    <div style={{height:"30px", width:"100px",justifyContent:"space-around", display:"flex", border:"1px red solid",alignItems:'center'}}>
        <button disabled={quantity<=0} onClick={()=>{DecreaseUpdater(id)}}>-</button>
        <p>{quantity}</p>
        <button onClick={()=>{IncreaseUpdater(id)}}>+</button>
    </div>
</div>
  
 </>
}
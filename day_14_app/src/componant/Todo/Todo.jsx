import React from "react";
import getItems from "./api";
import { useEffect } from "react";



export default function Todo(){
    const [page,setPage] = React.useState(1)
    const [items, setItems] = React.useState([])
    console.log('items', items);

    useEffect(()=>{
        getItems({page : page,limit : 10}).then((res)=>  setItems(res.data))
    },[page])
    // console.log('data', data);
   

    return <div>
        <button onClick={()=> setPage(page - 1)}>PREV</button>
        <h1>{page}</h1>
        <button onClick={()=> setPage(page + 1)}>NEXT</button>
    </div>
}
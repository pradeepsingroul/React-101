
import { useEffect, useState } from "react";
import React from "react";

export default function AddCity() {
    const [city, setCity] = React.useState({
        name: '',
        populations: ''
    })
   
    const handleChange = (e) => {
        const {name, value,type} = e.target;
        // console.log('type', type);
        // console.log("city", city)
        setCity({...city, [name]: value })

    }
    const handleSubmit = (e) => {

        e.preventDefault()
        
        
    }



    return <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='name' value={city.name} onChange={handleChange} />
            <input type="number" name='populations' value={city.populations} onChange={handleChange} />
            <input type="submit" />
        </form>
    </div>
}
import React from "react";


export default function Form() {

    const schema = {
        name: "",
        aim: "",
        address: "",
        age: "",
        number: "",
        isAdmin: false
    }

    const [formState, setFormState] = React.useState(schema)

    const submitHandler = (e) => {
        console.log(formState)
        // console.log(e)
        e.preventDefault();
    }
    const handleChange = (e) => {
        const { name, value, type,checked} = e.target;
        console.log(value, type,checked,value)
        const val = type === "checkbox" ? checked : value 
        setFormState({ ...formState, [name]: val })
    }

    return <div>
        <form onSubmit={submitHandler} >
            <input onChange={handleChange}
                // value={formState.name}
                name="name"
                type="text"
                placeholder="Enter your Name" />

            <input onChange={handleChange}
                value={formState.aim}
                name="aim"
                type="text"
                placeholder="Enter your Aim" />

            <input onChange={handleChange}
                value={formState.address}
                name="address"
                type="text"
                placeholder="Enter your Address" />

            <input onChange={handleChange}
                value={formState.age}
                name="age"
                type="text"
                placeholder="Enter your age" />

            <input onChange={handleChange}
                value={formState.number}
                name="number"
                type="text"
                placeholder="Enter your Mobile number" />

            <input onChange={handleChange}
                value={formState.isAdmin}
                name="isAdmin"
                type="checkbox"
            />

            <input className="submit" type="submit" />
        </form>
    </div>
}
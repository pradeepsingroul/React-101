import React from "react";



export default function FormV() {
    const schema = {name: "", password:""}//we can add more fields
    const [formData, setFormData] = React.useState(schema);


    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    const HandleChange = (e)=>{
        console.log(e.target.value)
        const {name,value} = e.target
        console.log('value', value);
        console.log('name', name);
        setFormData({...formData,[name]:value})
    }


    return <div>

        <form action="submit" onSubmit={HandleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={HandleChange}/>
            <input type="text" name="password" value={formData.password} onChange={HandleChange}/>
            <input type="submit" value="Submit" />
        </form>
    </div>




}
import React from "react";



export default function FormV() {
    // const schema = { name: "", password: "", valid: false}//we can add more fields
    const [formData, setFormData] = React.useState({});


    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    const HandleChange = (e) => {
        // console.log(e.target.value)
        const { name, value,type, checked } = e.target
        // console.log('checked', checked);
        const val = type === "checkbox" ? checked : value
        setFormData({ ...formData, [name]: val })
    }


    return <div>

        <form action="submit" onSubmit={HandleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={HandleChange} />
            <input type="text" name="password" value={formData.password} onChange={HandleChange} />
            <input type="checkbox" name="valid" value={formData.valid} onChange={HandleChange} />
            <select name="country" value={formData.country} onChange={HandleChange}>
                <option value="IN">india</option>
                <option value="China">china</option>
                <option value="US">us</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    </div>




}
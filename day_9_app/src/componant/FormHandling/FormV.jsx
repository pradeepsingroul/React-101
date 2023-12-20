import React from "react";



export default function FormV() {
    // const schema = { name: "", password: "", valid: false}//we can add more fields
    const [formData, setFormData] = React.useState({});
    const [data, setData] = React.useState([])
    

    const HandleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])
        console.log(data)
    }
    const HandleChange = (e) => {
        // console.log(e.target.value)
        const { name, value, type, checked } = e.target
        // console.log('checked', checked);
        const val = type === "checkbox" ? checked : value
        setFormData({ ...formData, [name]: val })
    }


    return <div>

        <form action="submit" onSubmit={HandleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={HandleChange} />
            <input type="password" name="password" value={formData.password} onChange={HandleChange} />
            <input type="checkbox" name="valid" value={formData.valid} onChange={HandleChange} />
            <select name="country" value={formData.country} onChange={HandleChange}>
                <option value="null">please select</option>
                <option value="IN">india</option>
                <option value="China">china</option>
                <option value="US">us</option>
            </select>
            <input type="submit" value="Submit" />

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>passwprd</td>
                        <td>valid</td>
                        <td>country</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.password}</td>
                            <td>{item.valid ? "accepted" : "rejected"}</td>
                            <td>{item.country}</td>
                        </tr>
                    })}
                </tbody>


            </table>

        </form>
    </div>




}
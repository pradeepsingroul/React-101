import Input from "./Input"

export default function Form(){



    return <div style={{marginBottom:"50px"}}>
        <Input type={"text"} placeholder={"Enter your name"}/>
        <select name="Gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
        <select name="Role">
            <option value="java developer">java developer</option>
            <option value="React nativ developer">React nativ developer</option>
            <option value="Mern statck developer">Mern statck developer</option>
        </select>
       
          
      
       
        
    </div>
}
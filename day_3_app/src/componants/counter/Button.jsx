export default function Button({text,handleChange}){

    

    return (
        <button onClick={handleChange}>{text}</button>
    )


}
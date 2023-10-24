

export default function Button({lable,handleFunciton}){



    return <div>
        <button onClick={handleFunciton}> {lable}</button>
    </div>
}
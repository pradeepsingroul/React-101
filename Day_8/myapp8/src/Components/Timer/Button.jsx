
export default function Button({Handler,lable}){
    return <>
        <button onClick={Handler}>{lable}</button>
    </>

}
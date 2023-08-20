export function Buttom(props){
const {text} = props;
return (
<button onClick={()=>{
    alert("someone clicked me")
}}>{text}</button>);
}

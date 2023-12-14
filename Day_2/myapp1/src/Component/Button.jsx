export function Buttom(props){
const {text} = props;

const onClickEve = ()=>{
    alert("Clicked")
}
return (


<button onClick={onClickEve}>{text}</button>);
}

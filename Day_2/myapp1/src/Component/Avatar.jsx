export default function Avatart(props){



    const{name,sourse} = props

    const Styles = {
       borderRadius :"50%",
       width:"500px",
       height:"500px"

    }
    return (<div>
        <img style={Styles} src={sourse} alt={name} />
        <h1>{name}</h1>
    </div>)
}

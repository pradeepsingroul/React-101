export default function TodoItem({keyi, text,onDelete }) {
    console.log('text', text);
    console.log('key', keyi);
    const stylei = {
        border: "1px solid red",
        width: "400px",
        height: "30px"
    }
    
    
    return <div style={stylei}>
        <li key={keyi}>{text}</li>
        <button onClick={()=>onDelete(keyi)}>delete</button>
    </div>
}
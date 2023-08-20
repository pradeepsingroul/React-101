// import logo from './logo.svg';
import './App.css';
import { Buttom } from './Component/Button';
import { Exmaple } from './Component/Example';
import Avatar from './Component/Avatar'
// function Button(props){
//   console.log('props', props);

//   const {text} = props
//   return <button
//     onclick={alert("ok")}
//     >{text}</button>
// }

function App() {
  
  return (
    <div className="App">
      <h1>To! kese hain aap log</h1>
      {/* 
      {Button() one way to create }
      {<Button></Button>}  second way to create
      */}
      <Buttom text="click me" />
      <Exmaple />

      <Avatar name="Iron man" sourse="https://cdnb.artstation.com/p/assets/covers/images/041/046/373/large/dot-square-dot-square-md-ironman01-00.jpg?1630598015" />
    
    </div>
  );
}

export default App;

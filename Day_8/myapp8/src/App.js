import logo from './logo.svg';
import './App.css';
import Parent from './Components/Counter/Parent';
import Timer from './Components/Timer/Timer';
import Form from './Components/Assignments/1Assign/Form';
import Input from './Components/Assignments/1Assign/Input';
import CountDown from './Components/Assignments/CountTownTimer/CountDown';

function App() {
  return (
    <div className="App">
      
    
      {/* <Parent/>
      <Timer/>
      <Form/> */}
      {/* <Input/>
       */}
       <CountDown initialValue={10}/>
    </div>

  );
}

export default App;

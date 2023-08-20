import logo from './logo.svg';
import './App.css';
import Hooks from './Component/Hooks';
import HooksApiFetching from './Component/HooksApiFetching'
import UseEffestWithPages from './Component/UseEffestWithPages'
// import { Timer } from './Component/Timer';
import React from 'react';
import { Timer } from './Assignments/TimerAssignments';
import { Timer2 } from './Assignments/Timer2';
import { TimerWithGarbage } from './Assignments/GarbageTimer';

function App() {
  const [flag,setFlag] = React.useState(true)
  return (
    <div className="App">
      {/* <Hooks/> */}
      {/* <HooksApiFetching /> */}
      {/* <UseEffestWithPages/> */}

      {/* {flag ? <Timer/> : ""}
      <Timer/>
      <button onClick={()=>{setFlag(!flag)}}>{flag ? "Hide timder" : "Show timer"}</button> */}
    

    {/* //assignments */}
    {/* <Timer/> */}
   {/* <Timer2/> */}
   {flag ? <TimerWithGarbage/> : ""}
   <button onClick={()=>{setFlag(!flag)}}>{flag ? "Hide timder" : "Show timer"}</button>
   
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Hooks from './Component/Hooks';
import HooksApiFetching from './Component/HooksApiFetching'
import UseEffestWithPages from './Component/UseEffestWithPages'
// import { Timer } from './Component/Timer';
import React from 'react';
import { Timer } from './Assignments/TimerAssignments';


function App() {
  const [showTimer,setShowTimer] = React.useState(true)
  return (
    <div className="App">
      {/* <Hooks/> */}
      {/* <HooksApiFetching /> */}
      {/* <UseEffestWithPages/> */}

      {/* {showTimer ? <Timer/> : ""}
      <Timer/>
      <button onClick={()=>{setShowTimer(!showTimer)}}>{showTimer ? "Hide timder" : "Show timer"}</button> */}
    

    {/* //assignments */}
   <Timer/>
    </div>
  );
}

export default App;

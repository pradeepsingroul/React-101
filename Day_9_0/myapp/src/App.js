import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [count,setCount] = React.useState(0)

  const IncreaseHandler = ()=>{
    setCount((co)=>{
      return co+1;
    })
  }

  return <>
      <h1>Hello! This is pradeep singroul {count}</h1>
      <button onClick={IncreaseHandler}>Count</button>
  </>
    
  
}

export default App;

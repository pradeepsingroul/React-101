import logo from './logo.svg';
import './App.css';
import React from "react";

// react.useState;
function App() {
  const [count,setCount] = React.useState(0);
  return (
    <div className="App">
     <h1>Count : {count}</h1>
     <button onClick={()=> setCount(count + 1)}>INC</button>
     <button onClick={()=> setCount(count - 1)}>DEC</button>
     <button onClick={()=> setCount(0)}>RESET</button>
    </div>
  );
}

export default App;

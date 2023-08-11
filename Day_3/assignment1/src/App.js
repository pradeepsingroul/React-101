import './App.css';
import { Button } from './Component/Button';
import React from 'react';
import { Input } from './Component/Input';
import Todo from './Component/Todo';
function App() {
  const [count,setCount] = React.useState(1);
  return (
    <div className="App">
    <Button />
    <br/>
    <br/>
    <br/>
    <hr/>
    <br/>
    <br/>
    <Input />
    <Todo />
    </div>
  );
}

export default App;

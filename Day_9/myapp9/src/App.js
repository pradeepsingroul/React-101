import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { MyContext } from './component/MyContext';
import { MyContext2 } from './component/MyContext2';

function App() {

  //consume
const value = useContext(MyContext2);
  console.log('value', value);
  return <>
    {/* <div>
      <h1>
        Hey! this is Context {value}
      </h1>
    </div> */}

    <div>
      <h1>Hey! {value.text} {value.count}</h1>
    </div>
  </>
}

export default App;

import './App.css';
import FormV from './componant/FormHandling/FormV';
import { useContext } from 'react';
import { AppContext } from './Context/AppContextProvide';
// import AppContextProvider from './componant/ContextApi/AppContextProvide';

export default function App() {
const value = useContext(AppContext)
  return (
    <div className="App">
      {/* <FormV />   */}
      <h1> hiiii</h1>
      <h1>{value.text}</h1>


    </div>
  );
}



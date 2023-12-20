import './App.css';
import FormV from './componant/FormHandling/FormV';
import { useContext } from 'react';
import { AppContext } from './Context/AppContextProvide';
import LoginHandler from './componant/LoginHandler';
// import AppContextProvider from './componant/ContextApi/AppContextProvide';

export default function App() {

  return (
    <div className="App">
      <LoginHandler/>
    </div>
  );
}



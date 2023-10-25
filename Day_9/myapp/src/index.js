import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './componant/Form';
import AppContextProvider, { AppContext } from './Context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  // <AppContexxt.Provider value={"DATA"}>
  //    {/* <Form/> */}
  //    <App/>
  // </AppContexxt.Provider>

  <AppContextProvider>
    <App/>
   </AppContextProvider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

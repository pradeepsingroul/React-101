import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyAppContextProvider, MyContext } from './component/MyContext';
import { MyContext2Provider } from './component/MyContext2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* inbuild context provider */}
   {/* <MyContext.Provider value={"DATA"}>
      <App/>
   </MyContext.Provider> */}




{/* My context provider */}
   {/* <MyAppContextProvider>
      <App/>
   </MyAppContextProvider> */}


   <MyContext2Provider>
    <App/>
   </MyContext2Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

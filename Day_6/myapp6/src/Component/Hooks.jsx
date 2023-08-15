
import React from "react";


{/* hooks :  let you hold state and lifecycle event inside functional components
  we follow some rules when writing hooks:
    1 only call hooks at the top of the function;
    2 only use them inside the functions, not in plain js ones
     
    two main hooks are defined here:
    1 useState()
    2 useEffect(callbackfunciton,dependecyarray) 
      -it run after the rendering 
      - it is the responsibility of react to call it]



*/}



export default function Hooks(){
  const [count,setCount] = React.useState(0);

    // document.title = "Learnig Hooks"
  console.log("1 :before the useeffest")
  React.useEffect(()=>{

    //do it after the rendering method
    console.log("3 :inside the useeffest")

    // document.title = `you clicked ${count} times`
   
    // events 
    // mount --> update --> unmount
    
    // what should happed during the moutn phase(when componenet is mounted to UI)
    
    // what should happed during the update phase(when componenet is mounted to UI)
   
    // what should happed during the unmount phase(when componenet is mounted to UI)
    



  })
  console.log("2 :after the useeffest")


  return <div>
    <h1>count : {count}</h1>
    <button onClick={()=> setCount(count + 1)}>increase</button>
  </div>
}



import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
  const [updateCounter,setUpdatecounter]=useState(0);

  // let flag=false;
  const handelIncrementButton=()=>{
    setCounter(counter + Number(updateCounter))
    // counter + Number(updateCounter) > 100 ?  console.log("Green")  : flag =false
  }
  const handelDecrementButton=()=>{
    setCounter(counter - Number(updateCounter))
  }
  const hadnelInput=(event)=>{
    setUpdatecounter(event.target.value)
  }
  return (
    <div className="App">
      <h1>Set counter</h1>
      <br></br> 
      <h1 style={{color:counter>100 ? "green"  : counter<-100 ? "red" :  "black"}  }>
      {counter}
      </h1>
      <button onClick={handelIncrementButton}> + </button>
      <input type={"number"} onChange={hadnelInput}/>
      <button onClick={handelDecrementButton}> - </button>
    </div>
  );
}

export default App;

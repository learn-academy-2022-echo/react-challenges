//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import SaltBot from './components/SaltBot'

function App() {
  
  const[userInput, setUserInput] = useState("")

  // const[userIndex, setUserIndex] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
    // setUserIndex(e.target.index)
    console.log(e.target.value);
  }

  
    

  
  return (
    <>
    <div className="App">
      <h1>Listening Robots</h1>
      <p>give it a message :</p>
      <input type="text" value={userInput} onChange={handleChange}/>
      <p>{userInput}</p>
    </div>
      <hr/>
      <h2>Good Robot</h2>
      <GoodRobot value={userInput}/>
      <hr/>
      <h2>Bad Robot</h2>
      <BadRobot value={userInput}/>
      <hr/>
      <h2>Saltbot</h2>
      <SaltBot value={userInput}/>
      {/* Returns a salty message */}
      <hr/>
   
    </>
  );
}

export default App;

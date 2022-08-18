//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import SaltBot from './components/SaltBot'

function App() {
  
  const[userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    console.log("its working!")
    setUserInput(e.target.value)
  }
  
  return (
    <>
    <div className="App">
      <h1>Listening Robot</h1>
      <input type="text" value={userInput} onChange={handleChange}/>
      <p>{userInput}</p>
    </div>
      <hr/>
      <h2>GoodRobot</h2>
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

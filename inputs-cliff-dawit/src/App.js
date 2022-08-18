import logo from './logo.svg';
import './App.css';
import BadRobot from './components/BadRobot'
import GoodRobot from './components/GoodRobot'
import KanyeRobot from './components/KanyeRobot'
import React, { useState } from "react"

// _______IMPORTS SECTION_____________


  
const App = () => {

  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
    console.log(e)
  }
  
  
  

// ______^^^___________LOGIC SECTION______^^^___________
// _____vvv___________Display SECTION______vvv___________
  return (
    <>
  <h1>Robot fun</h1>
  
  <input type="text" value={userInput} onChange={handleChange} />
      {/* <h2>{userInput}</h2>  */}
      <BadRobot whatHeTypes={userInput}/>
      <GoodRobot whatHeTypes={userInput}/>
      <KanyeRobot whatHeTypes={userInput}/>
      
      
  
  
  
  
  
  
  
  </>

  )

 
   }
export default App;

import React, { useState } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'


const App = () => {

  const [userInput, setUserInput] = useState("")
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }
 
  return (
    <>
    <h1>Robo Active Listening</h1>
    <h3>Say something</h3>
    <input type="text" value={userInput} onChange={handleChange} />

    <h3>Good Robot</h3>
    <p><GoodRobot name={userInput}/></p>

    <h3>Bad Robot</h3>
    <p><BadRobot name={userInput}/></p>

    <h3>Kanyebot 5000</h3>
    <p><KanyeBot name={userInput}/> </p>
    </>
  )
}

export default App;

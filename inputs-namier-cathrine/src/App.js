import React, { useState } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'
import DeveloperBot from './components/DeveloperBot'

const App = () => {

  const [userInput, setUserInput] = useState("")
  const [badInput, setBadInput] = useState("")
  const [developInput, setDevelopInput] = useState("")
  const handleBackspace = (e) => {
    if(e.keyCode === 8) {
       setBadInput(badInput.pop() && " ")
    }
}
  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
    setBadInput(["Bla", ...badInput])
    setDevelopInput(["Done for the day"])
  }
  
 
  return (
    <>
    <h1>Robo Active Listening</h1>
    <h3>Say something</h3>
    <input type="text" value={userInput} onChange={handleChange} onKeyDown = {handleBackspace} />

    <h3>Good Robot</h3>
    <p><GoodRobot name={userInput}/></p>

    <h3>Bad Robot</h3>
    <p><BadRobot name={badInput}/></p>
    

    <h3>Kanyebot 5000</h3>
    <p><KanyeBot name={userInput}/> </p>

    <h3>DeveloperBot</h3>
    <p><DeveloperBot name={developInput}/></p>
    </>
  )
}

export default App;

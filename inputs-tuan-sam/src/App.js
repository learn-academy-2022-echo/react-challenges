import React, { useState } from "react"
import RobotOne from "./components/RobotOne"
import RobotTwo from "./components/RobotTwo"
import RobotThree from "./components/RobotThree"


const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
  setUserInput(e.target.value)
  }

  return (
    <>
    <h1>Robot listening activity</h1>
      <input type="text" value={userInput} onChange={handleChange} />
      <RobotOne handleChange = {handleChange} userInput = {userInput}/>
      <RobotTwo userInput = {userInput}/>
      
      <RobotThree userInput = {userInput}/>
    
    </>
  )
}

export default App
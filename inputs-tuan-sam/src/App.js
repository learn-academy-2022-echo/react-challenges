import React, { useState } from "react"
import RobotOne from "./components/RobotOne"
import RobotTwo from "./components/RobotTwo"
import RobotThree from "./components/RobotThree"


const App = () => {
  const [userInput, setUserInput] = useState("")
  const myArr = ["b", "l", "a"]
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
  setUserInput(e.target.value)
  }

  const robot2 = () => {
    for(let i = 0; i < handleChange.length; i++)
    if (handleChange[i] !== "b") {
      return "b"
    }
  }

  return (
    <>
    
    <h1>Robot listening activity</h1>
      <input type="text" value={userInput} onChange={handleChange} />
      <RobotOne userInput = {userInput}/>
      <RobotTwo userInput = {userInput} robot2 ={robot2} />
      <RobotThree userInput = {userInput}/>
    
    </>
  )
}

export default App
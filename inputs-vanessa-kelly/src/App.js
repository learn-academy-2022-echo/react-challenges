import React, {useState} from 'react'
import GoodRobot from './Components/GoodRobot'
import BadRobot from './Components/BadRobot'

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [blahString, setBlahString] = 
  useState("")
    const handleChange = (e) => {
      console.log(e.target.value);
        setUserInput(e.target.value)
    }
  const blahMaker = ({userInput}) => {
    let inputLength = {userInput}.length
    let repeatBlah = "BLAH".repeat(inputLength)
    setBlahString(repeatBlah)
  }
  return <>
    <h1>Robot Party</h1>
      <input type="text" value={userInput} onChange = {handleChange}/>
        <GoodRobot userInput= {userInput}/>
        <BadRobot blahString = {blahString} blahMaker={blahMaker}/>
  </>
}

export default App
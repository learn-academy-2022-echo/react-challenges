import React, {useState} from 'react'
import GoodRobot from './Components/GoodRobot'
import BadRobot from './Components/BadRobot'
import KanyeBot from './Components/KanyeBot'
import BackwardsBot from './Components/BackwardsBot'
import './App.css'


const App = () => {
  const [userInput, setUserInput] = useState("")
  const [blahString, setBlahString] =
  useState("")
  const [inputReverse, setInputReverse] = useState("")
    const handleChange = (e) => {
      console.log(e.target.value)
      setUserInput(e.target.value)

      let inputLength = e.target.value.length
      let repeatBlah = "BLAH".repeat(inputLength)
      setBlahString(repeatBlah.slice(0, inputLength))

      setInputReverse(e.target.value.split("").reverse().join(""))
    }

  return <>
    <h1 class = "rainbow-text">Robot Party</h1>
      <input type="text" value={userInput} onChange = {handleChange}/>
      <div className="robots">
        <div className="row">
          <div className="column">
          <GoodRobot userInput={userInput} />
          <BadRobot blahString={blahString} />
          </div>
          <div className="column">
          <KanyeBot userInput={userInput} />
          <BackwardsBot inputReverse = {inputReverse}/>
          </div>
        </div>
      </div>
  </>
}

export default App

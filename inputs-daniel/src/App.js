// As a user, I can see a landing page with heading and a text input. X
// As a user, I see titles of three robots waiting for my text. X
// As a user, I see my "Good Robot" repeating exactly what I type in real time. X
// As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time. X
// As a user, I see a third robot that modifies the input as per the developer's choice in real time. X

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import MrRobot from './components/MrRobot'

function App() {
  const [userInput, setUserInput] = useState("")
  const [bla, setBla] = useState("")
  const [robot, setRobot] = useState("")


  const handleChange = (e) => {
    // console.log(e.target.value)
    
    //Good Robot
    setUserInput(e.target.value)

    // Bad Robot
    let blaString = "BLA".repeat(e.target.value.length)
    blaString = blaString.slice(0, e.target.value.length)
    setBla(blaString)

    // Mr Robot -- creates a string of random numbers, calling on randomCharFunc
    let robStr = ""
    for (let i = 0; i < e.target.value.length; i++) {
      robStr += randomCharFunc()
    }
    setRobot(robStr)
  }

  // used for Mr Robot -- returns a random character
  const randomCharFunc = () => {
    const randoString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,./;'-=[]`~"
    let randomChar = randoString[Math.floor(Math.random() * randoString.length)] 
    return randomChar;
  }

  return (
    <>
    <h1>Enter Text:</h1><input type = "text" value = {userInput} onChange = {handleChange} />
      <GoodRobot input = {userInput}/>
      <BadRobot bla = {bla} />
      <MrRobot robot = {robot} />
    </>
  );
}

export default App;

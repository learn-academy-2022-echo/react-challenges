import React, { useState } from 'react';
import DiceBox from './components/DiceBox'
import RollLogged from './components/RollLogged'


 const App = () => {

  const [myDice, setMyDice] = useState([1,2,3,4,5,6])
  const [randomIndex, setRandomIndex] = useState(0)

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * 6)
    setRandomIndex(randomNumber)
  } 
   

  return (
    <>
    <h1>Let's Roll The Dice</h1>
    <h2>Click Box To Roll</h2>
    <DiceBox myDice={myDice} randomIndex={randomIndex} handleClick={handleClick} />
    <RollLogged />
  
    </>
  )
 }




export default App

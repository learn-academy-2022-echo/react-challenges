import React, { useState } from 'react'
import './App.css';
import Dice from './components/Dice.js'
import Roll from './components/Roll.js'


function App() {
  
// make variable for the dice
// make variable for the random number generator
// make function for the random number generator

const [diceRoll, setDiceRoll] = useState (['1', '2', '3' ,'4' ,'5' ,'6'])

const [randomIndex, setRandomIndex] = useState(0)

const handleClick = () => {
  let randomNumber =  Math.floor(Math.random() * diceRoll.length)
  setRandomIndex(randomNumber)
}


  return (<>
    
    <div >
      <h1><Dice diceRoll={diceRoll}
      index={randomIndex} handleClick={handleClick}/></h1>
      <h2><Roll index={randomIndex} /></h2>
    </div>
  </>);
}

export default App;

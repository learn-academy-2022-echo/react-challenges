import React, { useState } from 'react'
import './App.css';
import Dice from './components/Dice.js'



function App() {
  
// make variable for the dice
// make variable for the random number generator
// make function for the random number generator

const [diceRoll, setDiceRoll] = ['1', '2', '3' ,'4' ,'5' ,'6']

const [randomIndex, setRandomIndex] = useState(0)

const handleClick = () => {
  let randomNumber =  Math.floor(Math.random() * diceRoll.length)
  setRandomIndex(randomNumber)
}
  
  return (<>
    
    <div >
      <Dice diceRoll={diceRoll}
      index={randomIndex} handleClick={handleClick}/>
    <h2 className='box'></h2> 
    
    </div>
  </>);
}

export default App;

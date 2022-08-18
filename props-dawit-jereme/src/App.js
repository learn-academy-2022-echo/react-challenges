import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import DiceRoll from './componenet/DiceRoll.js'


const App = () => {
  // Varibles Out Here
    
  const [randomIndex, setRandomIndex ] = useState(0)

  const handleCLick = () => {
      let diceRollRand = Math.floor(Math.random() * 6 + 1)
      setRandomIndex(diceRollRand)
    }

    return (
      <>
      <h1 className ="box" >Dice Roll App</h1>
      {/* Code in here */}
      
      < DiceRoll Onclick = {handleClick} />











   </>

)

}

export default App;


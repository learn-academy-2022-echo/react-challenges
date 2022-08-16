import React, { useState } from "react";
import Dice from './components/Dice'
import dice1 from './assets/dice1.png'
import dice2 from './assets/dice2.png'
import dice3 from './assets/dice3.gif'
import dice4 from './assets/dice4.png'
import dice5 from './assets/dice5.png'
import dice6 from './assets/dice6.png'
// Pseudocode: 
// App div 
  // Holds dice and roll component 
    // Black border, white background     
// RollLog component - css/js
  // Captures roll results and logs it for the user

const App = () => {
  const [diceFaces, setDiceFaces] = useState()


  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * 7)
    setDiceFaces(randomNumber)
    console.log("handleClick", {diceImages:[0]},typeof {diceImages:[0]} )
  }

  return (
    <>
      <h1>Dice Roller</h1>
     <Dice diceFaces={diceFaces} handleClick={handleClick}/>

     <div><img src = {dice1}/> </div>
    </>
  )
}

export default App;
import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import DiceRoll from './components/DiceRoll'
import RollCount from './components/RollCount'

// As a user, I can click on the box to roll the dice and see the result of my roll in the box.
//randomizer to assign values to dice

// As a user I should see the

function App() {
  const [randomNum, setRandomNum] = useState(1)



  const handleClick = () => {
    let diceNumber = Math.floor(Math.random() * 6 + 1)
    setRandomNum(diceNumber)
    
    console.log(diceNumber)
  }

  const[numbers, setNumbers] = useState([])


  return (
    <div className="container">
      <DiceRoll assignNumber={handleClick} numberDisplay={randomNum}/>
      <RollCount numberDisplay={randomNum}/>
      {numbers.map((value)=>{
        console.log("numbers.map()", value);
        return <RollCount numbers={value} index={randomNum} click={handleClick}/>
      })}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import RollDice from './Components /RollDice';
import React, {useState} from 'react'

function App() {

const [numbers, setNumbers] = useState(["1","2","3","4","5","6"])

const [randomIndex,setRandomIndex] = useState(0)

const handleClick = () => {
  let randomNumber = Math.floor(Math.random() * 7) 
  setRandomIndex(randomNumber)
}
  return (

    <div className="App">
      <h1 > dice game </h1>
      < RollDice numbers={value} index ={randomIndex} handleClick={handleClick}/>
      < RollDice/>
    </div>
  );
}

export default App;

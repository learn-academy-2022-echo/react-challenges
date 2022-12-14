import './App.css';
import { useState } from 'react';
import Dice from './components/Dice'

const App = () => {
  const [diceNumber, setDiceNumber] = useState(1)
  const handleClick = () => {
    setDiceNumber(Math.floor(Math.random() * (7-1) + 1))
  }

  const [rollLog, setRollLog] = useState([])
  const addLog = () => {
    setRollLog()
  }

  return <>
  <div className='border'>
    <h1>Dice </h1>
    <Dice handleClick = {handleClick} number = {diceNumber} />
  </div>
  <div className='border'>
    <Log />
  </div>
  </>
}

export default App;

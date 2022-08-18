// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Dice from './Components/Dice'

function App() {
const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6])
const [randomNumIndex, setRandomNumIndex] = useState(0)
const rollClick = () => {
  let randomNum = Math.floor(Math.random() * numbers.length)
  setRandomNumIndex(randomNum)
}
  return (
    <>
    <div className='box'> 
      <Dice numbers = {numbers} index = {randomNumIndex} rollClick = {rollClick}/>
         
      <p>Click Box to Roll</p>
    </div>

    <div className='box'> 
      <rollLog numbers = {numbers} index = {randomNumIndex} rollClick = {rollClick}/>
         
      <p>Rolls:</p>
    </div>
    </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';


function App() {

const [robotInput,setRobotInput] = useState("")

const handleChange = (e) => {
  console.log(e.target.value)
  setRobotInput(e.target.value)

}

const badChange = robotInput.length
console.log(badChange)



// const makeArray = robotInput.length 
// for(var i=0; i < robotInput.length; i++) {
//   robotInput.length[i] = robotInput.length.replace()
// }

// const wordsIntoArray = robotInput.split('')
// console.log(wordsIntoArray)



  return (
    <div>
      <>
        <h1>Robot input</h1>
      <input type="text" value={robotInput} onChange={handleChange}/>
      <GoodRobot robot1={robotInput}/>
      
      <BadRobot robot2={robotInput}/>
      <h2>Cool Robot</h2>
      
      
      
      
      
      
      
      
      </>
    </div>
  );
}

export default App;

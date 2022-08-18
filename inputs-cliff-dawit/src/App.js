import logo from './logo.svg';
import './App.css';
import BadRobot from './components/BadRobot'
import GoodRobot from './components/GoodRobot'
import KanyeRobot from './components/KanyeRobot'
import React, { useState } from "react"

// _______IMPORTS SECTION_____________


  
const App = () => {

  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
    console.log(e.target)
    console.log(e)
    console.log(e.target.value)
  }
  console.log(typeof(userInput))
  // let batman=userInput.split('');

    
  // for (let i = 0; i < userInput.length(); i++)
  //     return (batman(i)="b"  )

// var first = 3;
// var replaceWithB = "B"
// for (var i = first - 1; i<batman.length-1; i=+first){
//   batman[i] = replaceWithB;
// }
var str = userInput.split('');
var nth = 3; // the nth character you want to replace
var replaceWith = "B"
var replaceWitch= "l"
var replaceWithB="a" // the character you want to replace the nth value
for (var i = 0; i < str.length; i+=3) {
    str[i] = replaceWith; str[i-1]=replaceWitch; str[i-2] = replaceWithB;
}
// var xtr = userInput.split('');
// var mth = 2; // the nth character you want to replace
// var replaceWith = "l" // the character you want to replace the nth value
// for (var i = mth-1; i < str.length-1; i+=mth) {
//     str[i] = replaceWith;
// }



// ______^^^___________LOGIC SECTION______^^^___________
// _____vvv___________Display SECTION______vvv___________
  return (
    <>
  <h1>Robot fun</h1>
  
  <input type="text" value={userInput} onChange={handleChange} />
      {/* <h2>{userInput}</h2>  */}
      <BadRobot  carchase={str} whatHeTypes={userInput} />
      <GoodRobot whatHeTypes={userInput}/>
      <KanyeRobot whatHeTypes={userInput}/>
      
      
  
  
  
  
  
  
  
  </>

  )

 
   }
export default App;

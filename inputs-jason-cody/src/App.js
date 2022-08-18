import React, { useState } from 'react'
import GoodBot from './components/GoodBot'
import BadBot from './components/BadBot'
import RickJamesBot from './components/RickJamesBot'


function App() {
 
  // Make an array that takes in the input from the user

 const [userInput, setUserInput] = useState("")

 

 // creates an onchange event that takes the input from the user and sets it in the array

const handleChange = (e) => {
setUserInput(e.target.value)

// take the user input and replace each character with b then l then a every time I type a new character in that order

// function that takes each character in a string and iterates through and replaces them in the order of bla indefinitley

// store bla in an array

// split user input in individual characters

// replace individual characters with bla in a reoccuring order

// once replaced, join it all back together

// const badText = () => {
//   let badArr = ["bla"]
//   let splitArr = {userInput}.split("")
//   return splitArr.forEach()
 
// }


// .split()? new state? spread operator? function?



}

 return (<>
  <h1>Robot Parrot</h1>

<input type="text" value={userInput} onChange={handleChange}/>
<p>{userInput}</p>

<GoodBot userInput={userInput} />

<BadBot userInput={userInput} />

<RickJamesBot userInput={userInput} />

  
  
  </>);
}

export default App;

import React, { useState } from 'react'
import GoodBot from './components/GoodBot'
import BadBot from './components/BadBot'
import RickJamesBot from './components/RickJamesBot'


function App() {
 
  // Make an array that takes in the input from the user

 const [userInput, setUserInput] = useState("")

 

 // creates an onchange event that takes the input from the user and sets it in the array

const handleChange = (e) => {
  setUserInput(e.target.value)}

// take the user input and replace each character with b then l then a every time I type a new character in that order


// if(index === 0 || index === 3 * index){
//   return b
// }else if (index === 1 || index === 3 * index + 1){return l
//   }else if(index ===2 || index === 3 * index + 2){
//       return a
//   }


// .split()? new state? spread operator? function?







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

import React, { useState } from 'react'
import GoodBot from './components/GoodBot'

function App() {
 
  // Make an array that takes in the input from the user
 const [userInput, setUserInput] = useState("")
 
 // creates an onchange event that takes the input from the user and sets it in the array
const handleChange = (e) =>{
setUserInput(e.target.value)

// make a blank array for goodBot?
// const [goodBotText, setGoodBotText] = useState([])

const gBot = () => {
  const gBotText=
  setUserInput([...userInput,gBotText])
}



}

 return (<>
  <h1>Robot Parrot</h1>

<input type="text" value={userInput} onChange={handleChange}/>
<p>{userInput}</p>
<GoodBot onChange={handleChange}
/>

  
  
  </>);
}

export default App;

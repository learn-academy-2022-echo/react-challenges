// Import Section ____v
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import BadRobot from './components/BadRobot'
import GoodRobot from './components/GoodRobot'
import KanyeBot from './components/KanyeBot'

// Logic Section ____v
const App = () => {

    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
      console.log(e.target.value)
      setUserInput(e.target.value)
    }


//  Display Section ____v

return (
<>
<h1>hiiiii</h1>

<input type= "text" value={userInput} onChange = {handleChange}/>

<GoodRobot userInput={userInput} />
<BadRobot userInput={userInput} />
<KanyeBot userInput={userInput} />

</>
)
}


export default App;


// ideas 
// user input = hello there 

// map interval ==> index = i + 1 

// bbbbbbbb 

// map interval ==> index = j + 2
// blblblbl 

// map  ... index = k +3 

// blabla


// bbbbbbbb interval => index = index + blaaa 
import React, { useState } from "react";
import GoodRobot from "./Components/GoodRobot";
import BadRobot from "./Components/BadRobot";
import WarriorRobot from "./Components/WarriorRobot";


const App = () => {

  const [userInput, setUserInput] = useState ("")
  const handleChange  = (e) => {
    setUserInput(e.target.value);
  }


  return (
    <>
    <h1>Robot World 🤖🌎</h1>
    <input type="text" value={userInput} onChange={handleChange} />
    <GoodRobot userInput={userInput}/>
    <BadRobot userInput={userInput}/>
    <WarriorRobot userInput={userInput}/>
    </>
  )
}




export default App;

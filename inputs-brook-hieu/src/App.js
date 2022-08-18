import React, { useState } from "react";


// PSEUDO CODE
// each robot will be it's own component that listens to the same input event

  // See kanye bot modify string, same as good robot basically




const App = () => {
  const [userInput, setUserInput] = useState("BLANK TEXT")

  const GoodBot = () => {
    return (
      <>
      <h1>Hi, I'm the GoodBot</h1>
      <p>I hear you saying {userInput}. Is that correct?</p>
      </>
    )
  }

    // See bad robot replacing text input
    // I hear you saying {userInput}. Is that correct?
      // needs to replace userInput with setInput
      

  const BadBot = () => {

    return (
      <>
        <h1>Hi, i'm the BadBot</h1>
        
        <p>I hear you saying {userInput}. Is that correct?</p>

      </>
    )
  }

  const KanyeBot = () => {

    return (
      <>
        <h1>Hi, i'm the KanyeBot</h1>
        
        <p>I hear you saying {userInput}. Is that correct?</p>

      </>
    )
  }

  const handleChange = (e) => { // takes value
    setUserInput(e.target.value) // assigns it to target & value
  }

  
  return (
    <>
      <h1>This the landing page</h1>
      <input 
        type="text" 
        value={userInput} 
        onChange={handleChange} 
      />
      <GoodBot />
      <BadBot />
      <KanyeBot />
    </>
  )
}

export default App;

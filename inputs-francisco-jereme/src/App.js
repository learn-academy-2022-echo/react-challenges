// Import Section ____v
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

// Logic Section ____v
const App = () => {

    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
      console.log(e.target.value)
      setUserInput(e.target.value)
    }

    // attempt 1 
    // const blabla = () => {
    //   let blablaArray = userInput
    //   blablaArray.split("").map( (value) => {
    //     if (value = value) {
    //       return "bla"
    //     }
    //   })

    // }

    // attempt 2 Maybe not Right
    // const blabla = () => {
    //   let blablaArray = userInput
    //   for (let index = 0 ; index < blablaArray.length ; index = index + 1){
    //     userInput[index].replace(index, "B")
    //     for (let jndex = 0 ; jndex < blablaArray.length ; jndex = jndex + 2){
    //       userInput[jndex].replace(jndex, "L")
    //       for (let kndex = 0 ; kndex < blablaArray.length ; kndex = kndex + 2){
    //         userInput[kndex].replace(kndex, "A")
    //   }
    //     }
    //   }

    const blabla = () => {
      let blablaArray = userInput
      for (let index = 0 ; index < blablaArray.length ; index = index + 1){
        if (userInput[index] === 0) {
          return blablaArray[index].replace(/i/g,)
        } else if (userInput[index] === 0 + 1) {
          return "L"
        } else if (userInput[index] === 0 + 1 + 1){
          return "A"
        } else {

        }
      } }
// userInput[index].replace(index, "B")}
    // }
// {userInput.length}


//  Display Section ____v

return (
<>
<h1>hiiiii</h1>

<input type= "text" value={userInput} onChange = {handleChange}/>

<h3> Good Robot </h3>
<p>I hear you saying {userInput}. Is that correct?</p>

<h3> Bad Robot </h3>
<p> {blabla(userInput)}</p>

<h3> Silly Robot </h3>



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
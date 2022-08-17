import React, { useState } from 'react'
import MenuDisplay from './components/MenuDisplay'
import HelloWorld from './components/HelloWorld'

const App = () => {
  // array 
const [menuItems, setMenuItems] = useState([
  { item: "Burger", price: "$5" },
  { item: "Hot Dog", price: "$4" },
  { item: "Fries", price: "$2" },
])
  return (
    <>
     <MenuDisplay
    /> 
      <h1>Hello World!</h1>
      <HelloWorld/>
          </>
  )
}

// const App = () => {
//   return (
//     <>
//       <h1>Hello World!</h1>
//     </>
//   )
// }



export default App

// import React from 'react'




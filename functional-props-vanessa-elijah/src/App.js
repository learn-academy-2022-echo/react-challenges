import React, { useState } from 'react'
import MenuDisplay from './components/MenuDisplay'
import HelloWorld from './components/HelloWorld'

const App = () => {
  // array 
const [menuItems, setMenuItems] = useState([
  { item: "Burger", price: "$5", orderMade:false },
  { item: "Hot Dog", price: "$4", orderMade:false },
  { item: "Fries", price: "$2", orderMade:false },
])

const orderedItems = (selectedItem,id ) =>{

}

  return (
    <>
      <h1>Menu</h1>

      <MenuDisplay  
        hulk={menuItems}
      />
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




import React, { useState } from 'react'
import Menu from './components/Menu'
const App = () => {
  const [foodList, setFoodList] = useState([

    {name: "cheesecake slice", price: "$2.99"},
    {name: "apple pie", price: "$2.99"},
    {name: "banana bread", price: "$2.00"},
    {name: "cookies", price: "$6.00"},
    {name: "a dozen doughnuts", price: "$12.00"}

  ])
  
  return (
    <>
    <h1>Order Food</h1>
    {foodList.map((foodList, index) => {
      return <Menu sweets={foodList} key={index}/>
})}

    </>
  
  )
}


export default App


 {/* <ul key={index}> */}
 {/* <li>Food: {value.name}</li> */}
    {/* </ul> */}
      
      // <Menu sweets={foodList}/>


import React, { useState } from 'react'


const App = () => {
  const [foodList, setFoodList] = useState([
    {name: "cheesecake slice", price: "$2.99"},
    {name: "apple pie", price: "$2.99"},
    {name: "banana bread", price: "$2.00"},
    {name: "cookies", price: "$6.00"},
    {name: "a dozen doughnuts", price: "$12.00"}
  ])
  {foodList.map(value) => {
  return (
    <>
      <h1>Greeter Application</h1>
      
    </>

  )
  })}
}
export default App


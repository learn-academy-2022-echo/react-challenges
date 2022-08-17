import React, { useState } from 'react'
import Menu from './components/Menu'

const App = () => {
// create an array to maintain the list and useState to allow updates later
const [food, setFood] = useState([
    { food: "Burger", price: 5 },
    { food: "Fries", price: 3 },
    { food: "Hotdog", price: 4},
    { food: "Soda", price: 2 },
])

  const cart = []

// declare a function that will be pass down the river and update the state of the cart when we click the button
const addItem = (value) => {
  setFood({cart: [...food, value]})
  } 

  return (
    <>
      <h1>Menu</h1>
      <Menu 
        name={food}
        price={food.price}
        addItem={addItem}/>
      <h1>Food Cart</h1>
      {/* <Order /> */}
    </>
  )
}

export default App;

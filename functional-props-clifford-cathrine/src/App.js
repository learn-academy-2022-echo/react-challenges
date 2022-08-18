import React, { useState } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'
// ______________________this is the import section



const App = () => {
// create an array to maintain the list and useState to allow updates later
const [food, setFood] = useState([
    { food: "Burger", price: 5 },
    { food: "Fries", price: 3 },
    { food: "Hotdog", price: 4},
    { food: "Soda", price: 2 },
])

const [cart, setCart] = useState([])

const sum= cart
  .map(item =>item.price )
  .reduce((prev,curr)=>prev+curr,0)
const sumTax=cart
.map(item =>item.price )
.reduce((prev,curr)=>prev+(curr*.07),0)
.toFixed(2)
const superTotal= Number(sum) + Number(sumTax);
console.log(sum)
// declare a function that will be pass down the river and update the state of the cart when we click the button
const addItem = (item) => {
  setCart([...cart, item])

  } 
  


// ^ - this is the logic section

// v - this is the display section

  return (
    <>
      <h1>Menu</h1>
      <Menu 
        name={food}
        price={food.price}
        addItem={addItem}/>
      <h1>Food Cart</h1>
      <Order cart={cart} />
      <p>SubTotal is ${sum} tax is {sumTax}</p>
      <p>Total with tax ${superTotal}</p>
      
     
    </>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Order from './components/Order'
import React, {useState} from 'react'


function App() {
  const [food, setFood] = useState(
    [{foodname: "pizza", price: 1},
    {foodname: "cheeseburger", price: 4},
    {foodname: "fries", price: 1.5},
    {foodname: "sub", price: 5},
    {foodname: "wings", price: 7}])

  const [sum, setSum] = useState(0)

  const tax = 0.08

  const addTotal = (price) => {
    setSum((price * tax) + price)
    console.log(sum);
  }
  
  return (
   <>
  <Menu foodObj = {food}/>

  <Order foodObj = {food} sum = {sum} addTotal={addTotal}/>

   </>
  );
}

export default App;

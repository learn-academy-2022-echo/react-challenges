import React, {useState} from "react";
import './App.css';
import Menu from './components/Menu'
import Cart from './components/Cart'


function App() {
const [menu, setMenu] = useState([
  {food: "Sushi 🍱", price: 15, picture: "https://www.happyfoodstube.com/wp-content/uploads/2016/03/homemade-sushi-image.jpg"},
  {food: "Pizza 🍕", price: 20, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCB4F0iwEzaDtb5y4v6tz3A_n6VvF8sE4TZw&usqp=CAU"}, 
  {food: "Curry 🍛", price: 12, picture: "https://www.clipartmax.com/png/middle/23-230464_day-10-teaching-children-to-cook-cook-curry-clipart.png"}, 
  {food: "Calzone 🗿", price: 16, picture: "https://www.kindpng.com/picc/m/264-2646930_calzone-clip-art-hd-png-download.png"}
])
const [cart, setCart] = useState([])

const [totalCost, setTotalCost] = useState(0)

const [taxCost, setTaxCost] = useState(0)

const updateCart = (foodItem) => {
  setCart([...cart, foodItem.food + " $" + foodItem.price])
  let newCost = totalCost + foodItem.price
  setTotalCost(newCost)
  let newTaxCost = taxCost + foodItem.price * 1.075
  setTaxCost(Math.round(newTaxCost * 100) / 100)
}

  return (
  <>

  <div className = "background">
    <h1 className = "header" >😎 Diner Dash 😎</h1>
    <h2 className = "menu"> <Menu menuList ={menu} updateCart = {updateCart} /></h2>
    <h2 className = "menu"><Cart cartList = {cart} totalCost = {totalCost} taxCost = {taxCost} /></h2>
    </div>
  </> );
}

export default App;

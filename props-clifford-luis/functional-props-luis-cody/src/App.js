import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Menu from './components/Menu'
import Order from './components/Order'


function App() {

const [menuItems, setMenuItems] = useState([
 { food: "Hamburger", price: "3.00" },
 { food: "Tacos", price: "1.00"},
 { food: "Hotdog", price: "2.00"},
  ])

const [orderItems, setOrderItems] = useState([])
 

  // const [buttonText, setButtonText] =  useState('Order')

  //   function handleClick()  {
  //       setButtonText('Order');

  //   }

  return (
    <div>
      <>
      <h1>Menu</h1>
      <Menu 
      menuItem={menuItems}
      setOrderItems={setOrderItems}
      />
      <h2>Ordered Items</h2>
      <Order orderItems={orderItems}/>
      
      
      </>
    </div>
  );
}

export default App;

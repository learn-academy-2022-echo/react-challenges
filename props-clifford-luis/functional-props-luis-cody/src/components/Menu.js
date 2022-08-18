
import React from 'react'

const Menu = (props) => {
  return (
<>
{props.menuItem.map((value) => {
    return (
     <ul>
     <li>{value.food} {value.price}</li>
     <p> 
        <button onClick={() => {props.addOrder(value)}} >Order</button>
    </p>   
    </ul>
    )
} )}

{/* ={() => setOrderItems(orderItems.push(value.food) */}
   
    </>
  )
}

export default Menu

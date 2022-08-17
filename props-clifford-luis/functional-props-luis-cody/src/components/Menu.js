
import React from 'react'

const Menu = (props) => {
  return (
<>
{props.menuItem.map((value) => {
    return (
     <ul>
     <li>{value.food} {value.price}</li>
     <p> 
        <button onClick={() => setOrderItems(orderItems.push(value.food) ) }>Order</button>
    </p>   
    </ul>
    )
} )}


   
    </>
  )
}

export default Menu

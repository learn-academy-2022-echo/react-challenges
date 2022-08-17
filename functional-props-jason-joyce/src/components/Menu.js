import React from 'react'

const Menu = ( props ) => {
    {props.sweets.map((value, index) => {
  return (
    <ul key={index}>
      <h1>Menu: {value.name}</h1>
     
    </ul>
  )
})}
}

export default Menu
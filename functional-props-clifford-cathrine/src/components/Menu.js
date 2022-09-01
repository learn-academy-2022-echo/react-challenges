import React from 'react'

const Menu = ( props ) => {
  return (
    <>
      {/* map over array the array of objects */}
      {props.name.map((value, index)=> {
        return(
          <ul key={index}>
            <li> 
             { value.food + " " + "$" + value.price }
              <p>
                <button onClick={() => props.addItem(value, index)}>
                  Add Item to Cart
                  {/* {value.addItem && <p> Add Item </p>} */}
                </button> 
              </p>
            </li>
          </ul>
        )
      })}    
    </>
  )
}

export default Menu
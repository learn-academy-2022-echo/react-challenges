import React from 'react'

const Order = (props) => {
  return (
    <>
 {props.orderItems.map(() => {
    return (
        <p>{props.orderItems}</p>
    )

 })}
    


    </>
  )
}

export default Order
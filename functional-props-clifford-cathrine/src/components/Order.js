import React from "react"


function Order(props) {
  return (
   <>
        <p>Cart</p>
        {props.cart.map((value, index)=>{
            return<li key={index}>{value}</li>
        })}
   </>
  );
}

export default Order;
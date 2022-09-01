
const Order = (props) => {
    return (
      <>
     <h1>Order</h1>
       {props.foodObj.map((currentFood) => {
         return(
           <>
           <ul>
             <li>
             {currentFood.foodname} ${currentFood.price}
             <br/>
             <br/>
             <button onClick={props.addTotal(currentFood.price)}>Add to Order</button>
             </li>
           </ul>
           </>
         )
       })}  
      </>
     );
  }







export default Order
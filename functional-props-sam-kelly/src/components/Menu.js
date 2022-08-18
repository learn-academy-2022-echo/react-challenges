import React from "react";

const Menu = (props) => {
    return( 
    <>
   
<h2>Menu</h2>
{props.menuList.map((value, index) => {
    return(
        <ul key= {index}>
             <img className = "picture" src = {value.picture} ></img>
            <li className = "food">{value.food}</li>
            <li>${value.price}</li>
           <p>
            <button onClick = {() => props.updateCart(value) } >Order Here!</button>
           </p>
        </ul>
        
    )

})}

    </>
    )
}


export default Menu
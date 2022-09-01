import React from "react";

const FoodDisplay = (props) => {
    return (
        <>
           <p>Menu Item: {props.flash.food} {props.flash.price}</p>
        </>
    )
}

export default FoodDisplay
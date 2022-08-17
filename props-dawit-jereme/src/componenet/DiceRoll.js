import React from 'react'
const DiceRoll = (props) => {
    let number = Math.floor(Math.random() * 6 + 1)
    return (
        
        <div onClick={props.handleClick}>

        {/* < //Onclick= (props.//) */}
        <p>This a a Dice Roller</p>
        {number}
        <h2>{props.handleClick}</h2>

        </div>
        
    )
}

export default DiceRoll
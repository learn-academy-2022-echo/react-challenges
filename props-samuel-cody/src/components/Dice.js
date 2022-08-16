import React from 'react'

const Dice = (props) => {
  return(
    <div onClick={props.handleClick}>
    <h2>{props.diceRoll[props.index]}Dice</h2>
    </div>
  )
}

export default Dice
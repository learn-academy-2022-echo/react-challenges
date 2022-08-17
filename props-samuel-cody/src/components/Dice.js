import React from 'react'

const Dice = (props) => {
  return(
    <div onClick={props.handleClick}>
    <h2 className='box'> {props.diceRoll[props.index]}</h2>
    </div>
  )
}

export default Dice
import React from 'react'

const RollDice = (props) => {
    return ( 
        <div onClick={props.handleClick}>
    <h2 className= "box">{props.number}</h2>

        </div>
    )

}

export default RollDice
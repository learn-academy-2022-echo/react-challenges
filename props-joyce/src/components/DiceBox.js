import React from 'react'
import './DiceBox.css'

const DiceBox = (props) => {
    return (
        <>
        <div className='box'onClick={props.handleClick}>
            <h2><center>Dice</center></h2>
                <h1><center>{props.myDice[props.randomIndex]}</center></h1>
        </div>
        
        
        </>
    )
}

export default DiceBox
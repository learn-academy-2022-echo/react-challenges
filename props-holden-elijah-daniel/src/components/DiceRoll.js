import React, {useState} from 'react'
// import background from './images/1-dice.png'



const DiceRoll = (props) => {
    return (<>
    <div className="container">
        <h1>Dice</h1>
        <p className="box" onClick={props.assignNumber}></p>
    </div>
    </>)
}

export default DiceRoll
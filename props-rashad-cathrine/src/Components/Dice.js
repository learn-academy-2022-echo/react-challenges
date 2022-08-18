import React from 'react'
const Dice = (props) => {
    return (
        <div onClick={props.rollClick}>
            <p>
                {props.numbers[props.index]}
            </p>
        </div>
    )
}

export default Dice 
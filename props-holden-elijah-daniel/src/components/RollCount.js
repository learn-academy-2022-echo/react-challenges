import React, {useState} from 'react'

const RollCount = (props) => {
    return (<>
    <div className="rollDisplay container">
    <h1>Rolls</h1>
    <p>{props.numbers}</p>
    </div>
    
    </>)
}

export default RollCount
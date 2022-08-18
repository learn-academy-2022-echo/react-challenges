import React from 'react'

const GoodBot = (props) => {
  return (<>
   <h2>GoodBot</h2>
   <p onChange={props.gBot}>I hear you saying{props.userInput}. Is that correct?</p>
   
   </>)
}

export default GoodBot
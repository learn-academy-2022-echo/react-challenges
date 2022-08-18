import React from 'react'

const BadBot = (props) => {
  return (
  <>
    <h2>BadBot</h2>
    <p>I hear you saying "{props.userInput.split("").map((value, index) => {
      return (
//  If an index is 0 or a multiple of 3
//  If an index is 1 or a multiple of 3 and then add 1
//  If an index is 2 or a multiple of 



      )
    })}." Is the correct? </p>
    </> )
}

export default BadBot
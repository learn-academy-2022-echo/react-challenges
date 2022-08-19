import React from 'react'

const BadBot = (props) => {
  return (
    
  <>
    <h2>BadBot</h2>
    <p>I hear you saying "{props.userInput.split("").map((value, index) => {

//  If an index is 0 or a multiple of 3
//  If an index is 1 or a multiple of 3 + 1
//  If an index is 2 or a multiple of 3 + 2

if(index === 0 || index === 3 ){
    return "b"
  }else if (index === 1 || index === 3 + 1 )
  {return "l"
    }else if(index === 2 || index === 3 + 2){
        return "a"
    }
      return (value

 )
    })}." Is the correct? </p>
    </> )
}

export default BadBot
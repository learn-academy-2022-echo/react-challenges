import React from 'react'
// Create a function named roll
// want it to take in a random number that handleclick returns
//output the number in an ongoing list



const Roll = (props) => {
  return (
    <div> Roll List
<p>
 {props.index + 1}
</p>


    </div>
  )
}

export default Roll
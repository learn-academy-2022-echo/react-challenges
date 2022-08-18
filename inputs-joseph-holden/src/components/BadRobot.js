import React from "react";

// have a function that takes userInput and returns 
// a replaced message of "BLA" per index


const BadRobot = (props) => {
   var message = "You said this right? : "
   
    return(
        <>
           {props.value.map((value, index)=>{
                value[index] = "BLA" 

                return <p>{message.concat(props.value)}</p>
           })}
        </>
    )
}

export default BadRobot;
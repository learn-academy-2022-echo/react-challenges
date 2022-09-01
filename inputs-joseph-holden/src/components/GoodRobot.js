import React from "react";

// have a function that takes userInput and concats it with a pre defined message from GoodRobot


const GoodRobot = (props) => {
   var message = "You said this right? : "
   
    return(
        <>
            <p>{message.concat(props.value)}</p>
        </>
    )
}

export default GoodRobot;
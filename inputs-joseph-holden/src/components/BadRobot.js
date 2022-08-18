import React from "react";

// have a function that takes userInput and returns 
// a replaced message of "BLA" per index


const BadRobot = (props) => {
   var message = "You said this right? : "
   var b = "B"
   var l = "L"
   var a = "A"
   
    return(
    <>
            <div>
                {/* use built in method */}
                <p>{message}
                {props.value.split("").map((value)=>{
                 return "BLA" 
                })}
                </p>
            </div>
    </>
    )
}

export default BadRobot;
import React from "react";


const SaltBot = (props) => {
   var message = ", damn ur sweaty lol"
   
    return(
        <>
            <p>{props.value.concat(message)}</p>
        </>
    )
}

export default SaltBot;
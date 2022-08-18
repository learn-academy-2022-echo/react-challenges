
const BadRobot = (props) => {
    return (
        <>
        <h3>Bad Robot</h3>
        <p>What I hear you saying is, </p>
        {props.userInput.split("").map( (value, index) => {
        if (index === 0 || index % 3 === 0){
          return "B"
        } else if (index === 1 || (1 + 3 * index) ) {
          return "L"
        } else if (index === 2 || (2 + 3 * index) ) {
          return "A"
        } else {
            return "big mistake"
        }
    }).join("")}
        
        
        </>
    )
}

// cheeseburg e  r
// 0123456789 10 11
// blablablab l  a


export default BadRobot
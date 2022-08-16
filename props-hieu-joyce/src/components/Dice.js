import React, {useState} from "react"
// import assets from "src/assets"
// Dice component - css/js 
  // import dice images from asset folder 
  // show a dice 
    // Get a random result between 1-6 by pressing a button 
    // Set a default value of not started
  // Make a button that rolls dice and shows new results  
    // Make the dice a button 
    // Create a div that holds the image and image is an onclick 
    // Logic to change image everytime the dice is clicked 
    // Assign each dice image to an index 
      // Onclick returns random number and set image to random number using useState

const Dice = (props) => {
    
    return ( 
        <>
            <h2>Comes from Dice</h2>
                <div img src = "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></div>


            <div className = 'dice-image' onClick ={props.handleClick}>Dice
                <div img src = ''></div>

            </div>

        </>
    )
}

export default Dice
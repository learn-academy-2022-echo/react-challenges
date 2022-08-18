As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

The menu UI will be in its own component as will the order UI. App.js controls of all the data in state, renders the other components, and passes data to the menu and the order component.

PSUEDO CODE
make 2 components
One called menu and the other one called order
In app.js we will create an array using the {usestate}
    That array will have object stores within that have names and price key
 In the order component add a button that will take a user prompt for the food item
 Use a conditional to see if user prompt and food object.name are the same 
 Create an add total function in app.js
 If so, give a price amount. Price and food item will be displayed with the order component



📚 User Stories
As a user, I can see an application that has a list of food items and the price of each item. 
X
Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
As a user, I can click a button to select an item I wish to order.

As a user, I can see the items I have selected to order displayed on the page.
🏔 Stretch
As a user, I can see the total cost of my current order.
As a user, I can see both the base total cost of my food selections and the total that includes sales tax.
As a user, I can see the total that includes sales tax rounded to two decimals.
As a user, I can see an image of my food selection on the menu.




template of component
import React from 'react'

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App

// create an array to maintain the list and useState to allow updates later
const [adultGames, setAdultGames] = useState([
  { game: "Corn hole", supplies: false },
  { game: "Horse shoes", supplies: false },
  { game: "Flip cup", supplies: false },
])

// map over array the array of objects 
// Anytime we are mapping UI content in React we will need to include a key with a unique identifier. Therefore we will also pass the index parameter and assign as the unique identifier.
{adultGames.map((value, index)=> {
  return(
    <ul key={index}>
      <li> 
        Game: { value.game }
        <p>
          <button>Supplies verified: { value.supplies }</button> 
        </p>
      </li>
    </ul>
  )
})}
Child/Nested components
Created a folder called components in the src
Import the child component and performed a component call to display
move the logic to that child component
//  on the parent component, passed data on the component call by storing it in a variable
  <GameDisplay 
    event={adultGames}
  />
//  reference that data on the child component using props and the variable passed down the river
  // pass props as a parameter on the functional component declaration
  const GameDisplay = ( props ) => {

    // reference the props and data passed down the river on the component call through App.js 
    //  structure --> props.name of variable pass to the component 
      {props.event.map((value, index) => {
        return(
          <ul key={index}>
            <li> 
              Game: { value.game }  
              <p>
                <button>Supplies verified: {value.supplies}</button>
              </p>
            </li>
          </ul>
        )
      })}
conditional rendering
currently I want the button to only display a message once it is clicked
Supplies verified: {value.supplies &&
Yes, we have all the supplies

}
functional props
used to pass information back up the river from child component to the parent component
the idea is that clicking the button will change the state of supplies to true. In other words, we are reassigning the value of the supplies key to true. Once it is true, a message will be displayed.
// Create a function where the data (our arrays) are stored. In App.js
// to make sure this works we can just make an alert to display the information that will identify our object, its value (selectedObj and its index (id)
const gotSupplies = (selectedObj, id) => {
  alert(selectedObj, id)
}
// then pass the function down the river
  <GameDisplay 
    event={adultGames}
    gotSupplies={gotSupplies}
  />

// on GameDisplay component we will use the button to trigger the function call
// we use an anonymous function syntax to prevent the function from self invoking itself or being immediately invoke
// the anonymous function allows the function to wait for the button to be clicked
// the arguments used in the function invocation or function call will be the values and index passed down from the selected object
<button onClick={() => props.gotSupplies(value, index)}>
  Supplies verified: 
  {value.supplies && <p> Yes, we have all the supplies </p>}
</button> 

// Update the function to reassign the value of the supplies key to true and update the state of the array to reflect those changes
const gotSupplies = (selectedObj, id) => {
  // console.logs to show the status of the values and arrays before clicking the button
  // console.log("Adult Games", adultGames[id])
  // console.log("Kid Games", kidGames[id])
  // console.log("Adult Array", adultGames)
  // console.log("Kid Array", kidGames)

  // using conditionals to ensure clicking the button for an object in the adultGames array does not trigger the function in the kidGames array or vice versa

  // if the object in the adultGames array matches the object pass into the function then update the supplies value of that object to true 
  if(adultGames[id] === selectedObj) {
    // reassign the value at the index to true
    adultGames[id].supplies = true
    // set the state to reflect the changes using a spread operator
    setAdultGames([...adultGames])
  // else update the supplies value of that object to true in the kidGames array  
  } else {
    // reassign the value at the index to true
    kidGames[id].supplies = true
    // set the state to reflect the changes using a spread operator
    setKidGames([...kidGames])
  }

  // console.logs to show the status of the values and arrays after clicking the button
  // console.log("Adult Games", adultGames[id])
  // console.log("Kid Games", kidGames[id])
  // console.log("Adult Array", adultGames)
  // console.log("Kid Array", kidGames)  
} 



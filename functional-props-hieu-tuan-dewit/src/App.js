//create an array of objects with the key value pairs of food item and price. 
//This will be a destructured array with the name of the variable and a set condition for the variable assigned to useState. 
//Within useState will be the default values for the food object.
//We need a component that has the HTML displaying the food items in App.js
//We need a component invocation to display it in App.js 
//The second user story: i can click a button i with to order.
//Create a button in the foodItem component 
//onClick select the ID of the food item.
//Display the selected food items 

import React, { useState } from "react";
import FoodDisplay from './components/FoodDisplay'

const App = () => {
  const [foodItems, setFoodItems] = useState([
    { food: "cheeseburger", price: 13 },
    { food: "hamburger", price: 11 },
    { food: "fries", price: 6 },
    { food: "salad", price: 8 }
  ])
  return (
    <>
      <h1>Menu items</h1>
      {foodItems.map((foodObj, index) => {
        console.log("foodObj", foodObj)
        console.log("index", index)

        return (

          <FoodDisplay
            flash={foodObj}
            key={index}

          />
        )

      }
      )}
    </>
  )
}

export default App
import React, { useState } from 'react'
import Menu from './components/Menu'
const App = () => {
  const [foodList, setFoodList] = useState([
    {name: "cheesecake slice $2.99", order: false},
    {name: "apple pie $2.99", order: false},
    {name: "banana bread $2.00", order: false},
    {name: "cookies 6.00", order: false},
    {name: "a dozen doughnuts $12.00", order: false}
  ])
  
  return (
    <>
    <h1>Order Food</h1>
    {foodList.map((foodList, index) => {
      return <Menu sweets={foodList} key={index}/>
})}

    </>
  
  )
}


export default App


 {/* <ul key={index}> */}
 {/* <li>Food: {value.name}</li> */}
    {/* </ul> */}
      
      // <Menu sweets={foodList}/>


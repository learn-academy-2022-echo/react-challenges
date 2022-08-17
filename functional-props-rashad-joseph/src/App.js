import React , { useState } from 'react'
import List from './Components/List'
//_this is the import section__
const App = () => {
    const[stores, setStores ] = useState ([
      {name: "Apples", selected: true},
      {name: "Bananas", selected: true},
      {name: "Eggs", selected: true},
      {name: "Cheese", selected: true},
      {name: "Milk", selected: true},
      {name: "Flour", selected: true},
    ])

//_this is the logic section__
  const selectedMenu = (orderedMenu) => {
    console.log(orderedMenu);
    console.log(menu[orderedMenu]);
    console.log(menu[orderedMenu].selected);
    stores[orderedMenu].selected = true;
    setStores([...stores])

  }
  
  return (
    <>
    <h1>Food Ordering App</h1>
    <h3>Trader Max's:</h3>
    {stores.map((menu, index) => {
      return (
        <List
        menu={menu} 
        key={index}
        selectedMenu={selectedMenu}
        index={index}/>
      )
    }
    )}
  
    </>
  )
}

//_this is the display section__
export default App



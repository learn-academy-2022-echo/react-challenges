As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

The menu UI will be in its own component as will the order UI. App.js controls of all the data in state, renders the other components, and passes data to the menu and the order component.


📚 User Stories
As a user, I can see an application that has a list of food items and the price of each item.
Hint: Take some time to think about the data structure that will allow you to effectively store the required information.

//class can hold multiple arrays: food items, price
    food items: burger, hot dog, fries, milkshake
    food price: 5, 4, 2, 4

    create the class menu in app.js
    

As a user, I can click a button to select an item I wish to order.
//create a button to select an item

As a user, I can see the items I have selected to order displayed on the page. 


🏔 Stretch
As a user, I can see the total cost of my current order.
As a user, I can see both the base total cost of my food selections and the total that includes sales tax.
As a user, I can see the total that includes sales tax rounded to two decimals.
As a user, I can see an image of my food selection on the menu.

<!-- Original app.js with image etc
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; -->
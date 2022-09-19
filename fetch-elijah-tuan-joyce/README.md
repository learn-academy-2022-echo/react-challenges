Create a React application that shows the user their current location and IP address using the IP API.

1. Set up a React application 

2. Within App.js file - we created an App function. 

3. Within App function, we created a function called ourAPI which holds the fetch method and url address of the API we are using

```JavaScript
const ourAPI = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => console.log(payload))
    .catch(error => console.log(error))
  }

```

4. Within return of App function, create a button with onClick that calls to our ourAPI function to display IP address within Inspect 

```JavaScript 
import React, {useState} from "react"


const App = () => {

  const ourAPI = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => console.log(payload))
    .catch(error => console.log(error))
  }


  return (
    <>
  <button onClick ={ourAPI}>Click here to see IP address</button>
    </>
  )
}
```

//output:

    {ip: 'xxxxxx', network: 'xxxxx', version: 'xxxxx', city: 'xxxxx', region: 'California', …}


- Get the url of IP API: https://ipapi.co/json/



📚 User Stories
As a user, I can see a landing page with a header.
As a user, I can see a button to click to retrieve my IP address and location.
As a user, when I click the button I can see my IP address and location render on the page.
🏔 Stretch Goals
Create a React application that returns interesting information of the developer's choice using the NASA API.

Reminder that API keys should not be added to version control. Read more about protecting API keys here.
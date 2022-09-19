import { React, useState } from "react";
// As a user, I can see a landing page with a header.
// As a user, I can see a button to click to retrieve my IP address and location.
// As a user, when I click the button I can see my IP address and location render on the page.
function App() {

  const [ipAddress, setIpAddress] = useState()
  let ip = "string"
  console.log("before button", ipAddress.ip)


  const ipButton = () => {

    
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(payload => setIpAddress(payload))
      .catch(errors => console.log(errors))


      console.log("after button", ipAddress.ip)
  }
  
  return (
    
    <>
    
      <h1>This is a header</h1>

    

      <button onClick={ipButton}>Click me for your IP Address</button>
      <p> IP Address: {ip}</p>
    </>
  );
}

export default App;

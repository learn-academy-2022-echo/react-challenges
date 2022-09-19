import React, {useState} from "react"


const App = () => {
  const [location, setLocation] = useState(null)

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

export default App;

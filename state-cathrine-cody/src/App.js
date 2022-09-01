import React, {useState} from 'react'
import './App.css';


function App() {

  const [colors, setColors] = useState('white')
   const color = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']


  const boxClick = () =>{
    let ranColor = Math.floor(Math.random() * color.length)
    setColors(color[ranColor])

  }


  return (<>
      <h1>The Changing Color Box</h1>      
       <div className= 'box' onClick={boxClick}> 
          <p>{colors}</p>
       </div>
 </> ) 
  
}

export default App;

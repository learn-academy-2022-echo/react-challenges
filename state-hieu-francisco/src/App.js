import React, { useState } from 'react'
import MileTracker from './components/MileTracker'
import './App.css'
import ColorChangeClick from './components/ColorChangeClick'
const App = () => {

  return (
    <>
      <h1>Run Tracker App</h1>
      <p style={{color: "green"}}>January</p>
      <MileTracker />
      <p style={{backgroundColor: "purple"}}>February</p>
      <MileTracker />

      <p className="red">March</p>
      <MileTracker />
      <p id="white-box" className="white">white</p>
    </>
  )
}

export default App

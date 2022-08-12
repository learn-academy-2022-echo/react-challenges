import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading'
import ColorBoxes from './components/ColorBoxes';

function App() {
  return (
    <>
    <div className="App">
      
        <Heading />
        <ColorBoxes/>
        <ColorBoxes/>
        <ColorBoxes/>
        <ColorBoxes/>
        <ColorBoxes/>
        <ColorBoxes/>
        
      
    </div>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import Box from './Box';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className = "App">
        <Box />
      </div>
    );
  }
}


export default App;




/*
The first goal is to show a series of 16 boxes. (A box is just a square div with a background color.)
 - Initially each box should have a background color chosen from a random list of colors
  - When any box is clicked, it should change it's color to a different, random color. (Can't be the color it was...)
To Start:
 - create a new file, Box.js
  - will have it's own click listner that will pick a random color and pick it's own state


*/
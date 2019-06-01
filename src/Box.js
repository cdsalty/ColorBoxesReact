import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';

class Box extends Component {
  // static defaultProps = {
  //   allColors: ["purple", "red", "green", "blue", "orange", "magenta", "pink", "violet", "yellow", "orchard"]
  // };
  // To clean up the code, moved props to other props listed in BoxContainer and then called on it within here, "colors".
  constructor(props){
    super(props);
    // this.state = { color: choice(this.props.allColors) }; changed from allColors to colors (fron BoxContainer.js)
    this.state = { color: choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }
  
//   DO WHILE        DO WHILE    DO WHILE
  pickColor(){
    let newColor;
      do {
        newColor = choice(this.props.colors);  // This event will repeat over and over 
      } while (newColor === this.state.color);      // while color is already equal to newColor
      this.setState({ color: newColor });
  }

  handleClick(){
    this.pickColor();
  }
  render(){
    return(
      <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
    );
  }
}

export default Box;
import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';

class Box extends Component {
  static defaultProps = {
    allColors: ["purple", "red", "green", "blue", "orange", "magenta", "pink", "violet", "yellow", "orchard"]
  };
  constructor(props){
    super(props);
    this.state = { color: choice(this.props.allColors) };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){

  }
  render(){
    return(
      <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
    )
  }
}

export default Box;
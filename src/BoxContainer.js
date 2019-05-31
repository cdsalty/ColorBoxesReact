import React, { Component } from 'react';
import Box from './Box';

class BoxContainer extends Component {
  static defaultProps = {
    numOfBoxes: 18
  };

  render(){ // inside render, need to loop through a certain amount of times and create 'x' boxes. (determined by defaultProps)
    const boxes = Array.from({ length: this.props.numOfBoxes }).map(() => (
                // Create an array from zero to the length of numOfBoxes. Then map through each item in array
                // and for each element, we will return a box. Over the course of mapping through all the props
                // the total will be 18 boxes created via the map funciton.
      <Box />
    ));
    return(
      <div className = 'BoxContainer'>   
        {boxes}
      </div>
    );
  }
}

export default BoxContainer;

import React, { Component } from 'react';

// svg canvas component, this is a functional component b/c no additonal fuctionality other than rendering
const SVG = (props) => {
  return (
    <div>
      <svg className="svg-el">
        {props.circles}
      </svg>
    </div>
  )
}

export default SVG;

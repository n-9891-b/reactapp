import React, { Component } from 'react';

const SVG = (props) => {
  return (
    <div>
      <svg className="svg-el" width="600" height="400">
        {props.circles}
      </svg>
    </div>
  )
}

export default SVG;

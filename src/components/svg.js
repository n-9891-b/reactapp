import React, { Component } from 'react';

class SVG extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <svg className="svg-el" width="600" height="400">
          {this.props.circles}
        </svg>
      </div>
    )
  }
}

export default SVG;

import React, { Component } from 'react';
import * as d3 from 'd3';

class Circle extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    this._dragmove = this._dragmove.bind(this); //this must be bound, else refs doesn't know the component is the this value
  }

  // attach drag functionality after mounting
  componentDidMount() {
    d3.select(this.refs.myCircle)
      .call(d3.drag().on('drag', this._dragmove));
  }

  // define drag movement
  _dragmove() {
    d3.select(this.refs.myCircle)
      .classed("grabbing", true)
      .attr("cx", d3.event.x)
      .attr("cy", d3.event.y);
  }

  render() {
    return (
      <circle ref="myCircle" className="circle" cx={this.props.cx} cy={this.props.cy} r="30" style={{fill: this.props.style}}></circle>
    )
  }
}

export default Circle;

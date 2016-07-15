import React, { Component } from 'react';
import SVG from './svgElement';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      circleNum: '',
      circles: []
    }
  }

  // componentWillMount() {
  //   this.state.circles = circles;
  // }

  _drawCircles(circleNum) {
    this.setState({ circleNum });
  console.log('here is the circleNum', this.state.circleNum);
    let circles = [];
    for (let i = 0; i < circleNum; i++) {
      var cx = Math.floor(Math.random()*570);
      var cy = Math.floor(Math.random()*370);
      circles.push(<circle key={i} cx={cx} cy={cy} r="30"></circle>)
    }
    this.setState({ circles });
    console.log(this.state.circleNum, this.state.circles);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.circleNum}
          onChange={event => this._drawCircles(event.target.value)}
        />
        <SVG circles={this.state.circles}/>
      </div>
    )
  }
}

export default Input;

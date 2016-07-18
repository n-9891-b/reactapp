import React, { Component } from 'react';
import SVG from './svg';
import Circle from './circle';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      circleNum: '',
      circles: []
    }
  }

  _getRandomColor() {
    var hexChar = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += hexChar[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  _drawCircles(circleNum) {
    this.setState({ circleNum });
  console.log('here is the circleNum', this.state.circleNum);
    let circles = [];
    for (let i = 0; i < circleNum; i++) {
      var color = this._getRandomColor();
      var cx = Math.floor(Math.random()*570);
      var cy = Math.floor(Math.random()*370);
      circles.push(<Circle key={i} cx={cx} cy={cy} sty={color} r="30" />)
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

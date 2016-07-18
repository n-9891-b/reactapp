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
    let hexChar = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += hexChar[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  _drawCircles(circleNum) {
    this.setState({ circleNum });
    let circles = [];
    for (let i = 0; i < circleNum; i++) {
      let color = this._getRandomColor();
      let cx = Math.floor(Math.random()*570);
      let cy = Math.floor(Math.random()*370);
      circles.push(<Circle key={i} cx={cx} cy={cy} sty={color} r="30" />)
    }
    this.setState({ circles });
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

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SVG from './components/svg';
import Circle from './components/circle';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      circleNum: '',
      circles: []
    }
  }

  // random color generator for circles
  _getRandomColor() {
    let hexChar = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += hexChar[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // update state w/circles base on input num
  _drawCircles(circleNum) {
    this.setState({ circleNum });
    let circles = [];
    for (let i = 0; i < circleNum; i++) {
      let color = this._getRandomColor();
      let cx = Math.round(Math.random()*770-30);
      let cy = Math.round(Math.random()*570-30);
      circles.push(<Circle key={i} cx={cx} cy={cy} style={color} r="30" />)
    }
    this.setState({ circles });
  }

  render() {
    return (
      <div>
        <div className='circleInput'>
          <h1>React/D3 Coding Challenge</h1>
          <label>Input the number of circles: </label>
          <input
            className='inputBox'
            value={this.state.circleNum}
            onChange={event => this._drawCircles(event.target.value)}
          />
        </div>
        <SVG circles={this.state.circles} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


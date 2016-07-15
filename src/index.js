import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentWillMount() {

  // }

  // _drawCircles() {
  //   this.state
  // }

  render() {
    return (
      <div>
        <label>Input the number of circles:</label>
        <Input />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

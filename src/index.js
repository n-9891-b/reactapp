import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';

// root component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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

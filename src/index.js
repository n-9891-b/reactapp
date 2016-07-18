import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';

// root component
const App = () => {

  return (
    <div>
      <label>Input the number of circles:</label>
      <Input />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));

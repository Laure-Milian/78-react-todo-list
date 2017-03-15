import React, { Component } from 'react';
import './App.css';
import Items from './Items.js';
import ItemForm from './ItemForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemForm />
        <Items />
      </div>
    );
  }
}

export default App;

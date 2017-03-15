import React, { Component } from 'react';
import './App.css';
import Items from './Items.js';
import ItemForm from './ItemForm.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items:
        [
        {
          id: 1,
          content: "Manger"
        },
        {
          id: 2,
          content: "Boire"
        },
        {
          id: 3,
          content: "Respirer"
        }
      ]
    }
  }

  addItems(newItems) {
    console.log("coucou");
    console.log(this.state.items)
    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div className="App">
        <ItemForm addItems={this.addItems.bind(this)} />
        <Items items={this.state.items} />
      </div>
    );
  }

}

export default App;

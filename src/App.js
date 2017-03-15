import React, { Component } from 'react';
import './App.css';
import Items from './Items.js';
import ItemForm from './ItemForm.js';
import Filters from './Filters.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items:
        [
        {
          id: 1,
          content: "Manger",
          status: true
        },
        {
          id: 2,
          content: "Boire",
          status: false
        },
        {
          id: 3,
          content: "Respirer",
          status: false
        }
      ]
    }
  }

  addItems(newItems) {
    this.setState({
      items: newItems
    })
  }

  changeStatus(id) {
    let changedItems = this.state.items.map((item) => {
      if (id == item.id) {
        if (item.status == true) {
          item.status = false;
        } else {
          item.status = true;
        }
      }
      return item;
    })
    this.addItems(changedItems);
  }

  render() {
    return (
      <div className="App">
        <ItemForm addItems={this.addItems.bind(this)} />
        <Items items={this.state.items} setNewStatus={this.changeStatus.bind(this)} />
        <Filters />
      </div>
    );
  }

}

export default App;

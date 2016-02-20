import React from 'react';
import Form from './Form';
import Detail from './Detail';
import List from './List';
import SearchBar from './Search';

var elements = [
  {
    id: 1,
    name: "jeison",
    nick: "jsn",
  },
    {
    id: 2,
    name: "andres",
    nick: "and",
  },
    {
    id: 3,
    name: "carlos",
    nick: "car",
  },
];



const App = React.createClass({
  
  getInitialState() {
    return {
      elements: elements,
    }
  },

  addElement(element) {
    const elements = this.state.elements;
    elements.push(element);
    debugger
    this.setState({
      elements: elements,
    })
  },

  render() {
    return (
      <div className="App">
        <div className="App-left">
          <SearchBar />
          <List elements={elements}/>
        </div>
        <div className="App-right">
          <Form addElement={this.addElement}/>
          <Detail />
        </div>
      </div>
    );
  }
});

module.exports = App;
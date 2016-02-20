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
      elementToShow: 1,
    }
  },

  getElementDetail(id) {
    return this.state.elements.filter(function(el) {
      if (el.id === id) {
        return el;
      }
    })[0];
  },

  addElement(element) {
    const elements = this.state.elements;
    elements.push(element);
    debugger
    this.setState({
      elements: elements,
    })
  },

  changeDetail(id) {
    this.setState({
      elementToShow: id,
    });
  },

  render() {
    const detail = this.getElementDetail(this.state.elementToShow);
    return (
      <div className="App">
        <div className="App-left">
          <SearchBar />
          <List elements={this.state.elements} changeDetail={this.changeDetail}/>
        </div>
        <div className="App-right">
          <Form addElement={this.addElement}/>
          <Detail detail={detail}/>
        </div>
      </div>
    );
  }
});

module.exports = App;
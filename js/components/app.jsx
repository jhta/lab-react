import React from 'react';
import Form from './Form';
import Detail from './Detail';
import List from './List';
import SearchBar from './Search';
import ClientStore from '../stores/client';

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
      elements: ClientStore.getClients(),
      elementToShow: 1,
    }
  },

  componentDidMount() {
    debugger
    ClientStore.addChangeListener(this.onChange);
  },

  componentWillUnmount() {
    ClientStore.removeChangeListener(this.onChange);
  },

  getElementDetail(id) {
    return this.state.elements.filter(function(el) {
      if (el.id === id) {
        return el;
      }
    })[0];
  },

  onChange() {
    const clients = ClientStore.getClients();
    debugger
    this.setState({
      elements: clients,
    })
    console.log("onChange");
  },

  render() {
    const detail = this.getElementDetail(this.state.elementToShow);
    return (
      <div className="App">
        <div className="App-left">
          <SearchBar />
          <List elements={this.state.elements}/>
        </div>
        <div className="App-right">
          <Form />
          <Detail detail={detail}/>
        </div>
      </div>
    );
  }
});

module.exports = App;
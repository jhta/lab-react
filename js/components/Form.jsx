import React from 'react';
import ClientActions from '../actions/client';

const Form = React.createClass({
  
  onSubmit(e) {
    e.preventDefault();
    const { name, nick } = this.refs;
    console.log(name, nick);
    const element = {
      name: name.value,
      nick: nick.value,
      id: Math.floor(Math.random() * 1000000000),
    }
    //this.props.addElement(element);
    ClientActions.addClient(element);
    name.value = "";
    nick.value = "";
  },

  render() {
    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <input placeholder="nombre" ref="name"/>
        <input placeholder="nick" ref="nick"/>
        <button>Crear</button>
      </form>
    );
  }
});

module.exports = Form;
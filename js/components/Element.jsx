import React from 'react';
import ClientActions from '../actions/client';

const Element = React.createClass({
  
  onClick(e) {
    e.preventDefault();
    ClientActions.changeDetail(this.props.element.id)
    //this.props.changeDetail(this.props.element.id);
    //this.props.element.id
  },

  render() {
    return (
      <li className="List-item" onClick={this.onClick}>
        {this.props.element.name}
      </li>
    );
  }
});

module.exports = Element;
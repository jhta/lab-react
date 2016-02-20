import React from 'react';


const Element = React.createClass({
  
  onClick(e) {
    e.preventDefault();
    this.props.changeDetail(this.props.element.id);
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
import React from 'react';


const List = React.createClass({
  render() {
    return (
      <div className="List">
        <ul>
          {
            this.props.elements.map(function(el) {
              return <li className="List-item" key={el.id}>{el.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = List;
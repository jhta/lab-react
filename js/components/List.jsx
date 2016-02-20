import React from 'react';
import Element from './Element';

const List = React.createClass({
  render() {
    const changeDetail = this.props.changeDetail;
    return (
      <div className="List">
        <ul>
          {
            this.props.elements.map(function(element) {
              return <Element
                key={element.id}
                changeDetail={changeDetail}
                element={element}
              />
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = List;
import React from 'react';

const Detail = React.createClass({
  render() {
    return (
      <div className="Detail">
        <figure>
          <img src="" height="60" width="60"/>
        </figure>
        <h2>{this.props.detail.name}</h2>
        <span>{this.props.detail.nick}</span>
      </div>
    );
  }
});

module.exports = Detail;
import React from 'react';

const ComponentExample = React.createClass({
  render() {
    return (<h1>{this.props.message}</h1>);
  }
});

module.exports = ComponentExample;
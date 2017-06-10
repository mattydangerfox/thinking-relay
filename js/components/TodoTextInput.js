import React from 'react';


export default class TodoTextInput extends React.Component {
  render() {
    return (
      <input
      className={this.props.className}
      placeholder={this.props.placeholder}
      />
    )
  }
};
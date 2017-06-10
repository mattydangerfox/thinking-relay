import React from 'react';
import ReactDOM from 'react-dom';


export default class TodoTextInput extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    return (
      <input
      className={this.props.className}
      placeholder={this.props.placeholder}
      />
    )
  }
};
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ENTER_KEY_CODE = 13;

class TodoTextInput extends React.Component {

  state = {
    text: '',
  };

  _handleChange = (e) => {
    console.log(`TodoTextInput: value: ${e.target.value}`);
    this.setState({text: e.target.value});
  };

  _handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.props.onSave(this.state.text);
      this.setState({text: ''});
    }
  };

  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this._handleChange}
        onKeyDown={this._handleKeyDown}
        value={this.state.text}
      />
    );
  }
}

TodoTextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TodoTextInput;
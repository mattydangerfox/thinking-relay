import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class TodoTextInput extends React.Component {

  _handleChange = (e) => {
    console.log(`TodoTextInput: value: ${e.target.value}`);
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
      />
    );
  }
}

TodoTextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TodoTextInput;
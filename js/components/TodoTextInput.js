import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class TodoTextInput extends React.Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
      />
    );
  }
}

TodoTextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TodoTextInput;
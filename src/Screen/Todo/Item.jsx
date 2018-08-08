import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TodoItem(props) {
  const { text } = props;
  return (
    <listItemLockup>
      <title>{text}</title>
    </listItemLockup>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  // onHoldSelect: PropTypes.func.isRequired,
};

export default connect()(TodoItem);

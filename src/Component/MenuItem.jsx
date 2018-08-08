import React from 'react';
import PropTypes from 'prop-types';

export default function MenuItem(props) {
  const { title, reference } = props;

  return (
    <menuItem ref={reference}>
      <title>{title}</title>
    </menuItem>
  );
}

MenuItem.propTypes = {
  reference: PropTypes.shape({
    current: PropTypes.any,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

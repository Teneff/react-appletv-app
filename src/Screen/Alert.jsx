import React from 'react';
import PropTypes from 'prop-types';

export default function Loading(props) {
  const { title, description } = props;
  return (
    <alertTemplate>
      <title>{title}</title>
      <description>{description}</description>
    </alertTemplate>
  );
}

Loading.defaultProps = {
  description: '',
};

Loading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

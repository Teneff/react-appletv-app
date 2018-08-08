import React from 'react';
import PropTypes from 'prop-types';

export default function Loading(props) {
  const { title } = props;
  return (
    <loadingTemplate>
      <activityIndicator>
        <title>{title}</title>
      </activityIndicator>
    </loadingTemplate>
  );
}

Loading.defaultProps = {
  title: 'Loading...',
};

Loading.propTypes = {
  title: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { page } = this.props;
    return (
      <React.Fragment>
        <head>
          <style />
        </head>
        {page}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  page: PropTypes.node.isRequired,
};

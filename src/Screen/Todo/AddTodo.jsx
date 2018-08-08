import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../Form';

const AddTodo = ({ dispatch, onSubmit }) => (
  <Form onSubmit={({ value }) => dispatch(onSubmit(value))} />
);

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default connect()(AddTodo);

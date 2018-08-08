import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Filter, { Visibility as VisibilityFilters } from './Filter';
import TodoItem from './Item';
import AddTodo from './AddTodo';
import Presenter from '../../Presenter';

let nextTodoId = 0;
export const actions = {
  addTodo: text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }),
  setVisibilityFilter: filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }),
  toggleTodo: id => ({
    type: 'TOGGLE_TODO',
    id,
  }),
};

class TodoList extends React.Component {
  static addItem(event) {
    const form = <AddTodo onSubmit={actions.addTodo} description="asd" />;
    const doc = Presenter.createDocumentFragment(form);
    navigationDocument.pushDocument(doc);
  }

  constructor(props) {
    super(props);
    this.todos = React.createRef();
    this.add = React.createRef();
    this.handleHoldSelect = this.handleHoldSelect.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    this.todos.current.addEventListener('select', this.handleSelect);
    this.todos.current.addEventListener('holdselect', this.handleHoldSelect);
    this.todos.current.addEventListener('play', this.handlePlay);
    this.add.current.addEventListener('select', this.constructor.addItem);
  }

  componentWillUnmount() {
    this.todos.current.removeEventListener('select', this.handleSelect);
    this.todos.current.removeEventListener('holdselect', this.handleHoldSelect);
    this.todos.current.removeEventListener('play', this.handlePlay);
    this.add.current.removeEventListener('select', this.constructor.addItem);
  }

  handleSelect(event) {
    console.log('@TODO: preview');
  }

  handleHoldSelect(event) {
    console.log('@TODO: edit');
  }

  handlePlay(event) {
    console.log('@TODO: delete');
  }

  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <paradeTemplate>
        <list>
          <Filter />
          <section ref={this.todos}>
            <header>
              <title>Todo List:</title>
            </header>
            {todos.map(item => (
              <TodoItem
                key={item.id}
                {...item}
                onHoldSelect={() => toggleTodo(item.id)}
              />
            ))}
          </section>
          <section>
            <listItemLockup ref={this.add}>
              <title>Add</title>
            </listItemLockup>
          </section>
          <relatedContent>
            <imgDeck>
              <img src="path to images on your server/Car_Movie_250x375.png" alt="" />
              <img src="path to images on your server/Car_Movie_250x375_A.png" alt="" />
              <img src="path to images on your server/Car_Movie_250x375_B.png" alt="" />
              <img src="path to images on your server/Car_Movie_250x375_C.png" alt="" />
            </imgDeck>
          </relatedContent>
        </list>
      </paradeTemplate>
    );
  }
}

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      ...TodoItem.propTypes,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
  toggleTodo: PropTypes.func.isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
};


const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id) => {
    dispatch(actions.toggleTodo(id));
  },
});

const Todo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);


export default Todo;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Visibility = {
  SHOW_ALL: 1,
  SHOW_COMPLETED: 2,
  SHOW_ACTIVE: 3,
};

const defaultItems = [{
  title: 'Active',
  filter: Visibility.SHOW_ACTIVE,
}, {
  title: 'Completed',
  filter: Visibility.SHOW_COMPLETED,
}, {
  title: 'All',
  filter: Visibility.SHOW_ALL,
}];

export const actions = {
  setVisibilityFilter: filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }),
};

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.highlightHandler = this.highlightHandler.bind(this);
    this.filter = React.createRef();
    const { items } = this.props;
    this.state = {
      items: items.map(item => ({
        ...item,
        reference: React.createRef(),
      })),
    };
  }

  componentDidMount() {
    this.filter.current.addEventListener('highlight', this.highlightHandler);
  }

  componentWillUnmount() {
    this.filter.current.removeEventListener('highlight', this.highlightHandler);
  }

  highlightHandler(event) {
    console.log(event);
    // const { dispatch } = this.props;
    // const { items } = this.state;
    // const item = items.find(i => i.reference.current === event.target);
    // dispatch(actions.setVisibilityFilter(item.filter));
  }

  render() {
    const { dispatch } = this.props;
    const { items } = this.state;
    return (
      <tumblerBar ref={this.filter}>
        {items.map(item => (
          // dispatch(actions.setVisibilityFilter(item.filter))
          <tumblerItem ref={item.reference} onHighlight={event => console.log('here', event)}>
            <title>{item.title}</title>
          </tumblerItem>
        ))}
      </tumblerBar>
    );
  }
}

Filter.defaultProps = {
  items: defaultItems,
};

Filter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    filter: PropTypes.oneOf(Object.keys(Visibility)).isRequired,
  }),
};

export default connect()(Filter);

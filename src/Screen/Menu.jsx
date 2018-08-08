import * as React from 'react';
import PropTypes from 'prop-types';
import Presenter from '../Presenter';
import MenuItem from '../Component/MenuItem';

import * as style from '../style/main.css';

/**
 * Use the menu bar template (menuBarTemplate) to display
 * a list of selectable items across the top of the screen.
 * Users can move between menu bar items to change the
 * information displayed below the menu bar. Figure 11-1
 * shows the basic layout for a menuBarTemplate page.
 * The theme for the alert template defaults to the system
 * preference. The theme for the menu bar template defaults
 * to the system preference.
 */
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.map(item => ({
        ...item,
        reference: React.createRef(),
      })),
    };
    this.menuBar = React.createRef();
    this.selectHandler = this.selectHandler.bind(this);
  }

  componentDidMount() {
    this.menuBar.current.addEventListener('select', this.selectHandler);
  }

  componentWillUnmount() {
    this.menuBar.current.removeEventListener('select', this.selectHandler);
  }

  selectHandler(event) {
    const feature = event.target.parentNode.getFeature('MenuBarDocument');

    if (feature) {
      const currentDocument = feature.getDocument(event.target);

      const { items } = this.state;
      const item = items.find(({ reference }) => reference.current === event.target);

      if (!currentDocument || item.cache === false) {
        // const element = React.createElement(input, props);
        const doc = Presenter.createDocumentFragment(item.onSelect(event));
        feature.setDocument(doc, event.target);
      }
    }
  }

  render() {
    const { items } = this.state;

    return (
      <menuBarTemplate>
        <menuBar ref={this.menuBar}>
          {items.map((item, key) => (
            <MenuItem
              {...item}
              key={key}
            />
          ))}
        </menuBar>
      </menuBarTemplate>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      // page: PropTypes.node.isRequired,
      onSelect: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

Menu.style = style;

import React from 'react';
import Menu from './Menu';

import Page from './Page';
import Settings from './Settings';
import FeaturedShelf from './FeaturedShelf';
import Time from './Time';
import Swap from './Swap';
import Todo from './Todo';

const settings = [{
  label: 'Hello',
}, {
  label: 'Sign In',
}];

const items = [{
  title: 'Home',
  onSelect: () => <Page />,
}, {
  title: 'Todo',
  onSelect: () => <Todo />,
}, {
  title: 'Featured Shelf',
  onSelect: () => <FeaturedShelf />,
}, {
  title: 'Swap',
  cache: false,
  onSelect: () => <Swap />,
}, {
  title: 'Time',
  onSelect: () => <Time />,
}, {
  title: 'Settings',
  onSelect: () => <Settings settings={settings} />,
}];

const Home = <Menu items={items} />;

export default Home;

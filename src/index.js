import ReactDOM from 'react-dom';
import React from 'react';

import methods from './application';
import Menu from './Screen/Menu';
import Presenter from './Presenter';
import Page from './Screen/Page';

import Home from './Screen/Home';

Object.assign(App, {
  onLaunch: (options) => {
    console.log(options);
    const doc = Presenter.createDocumentFragment(Home);
    navigationDocument.pushDocument(doc);
  },
  ...methods,
});


export {
  Presenter,
  Home,
  Page,
  React,
  ReactDOM,
  Menu,
};

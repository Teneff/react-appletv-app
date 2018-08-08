import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);
global.store = store;
let domParser;

export default class Presenter {
  static getDOMParser() {
    if (!domParser) {
      domParser = new DOMParser();
    }
    return domParser;
  }

  static createDocumentOld(element) {
    const doc = this.getDOMParser().parseFromString('<document />', 'application/xml');
    if (element) {
      ReactDOM.render(element, doc.firstChild);
    }
    return doc;
  }

  static createDocument(element) {
    const domimp = global.DOMImplementationRegistry.getDOMImplementation();
    const doc = domimp.createDocument('http://apple.com/TVML/1.0', 'document');
    if (element) {
      ReactDOM.render(element, doc.firstChild);
    }
    return doc;
  }

  static createDocumentFragment(child) {
    const element = (
      <Provider store={store}>
        <React.Fragment>
          <head>
            <style />
          </head>
          {child}
        </React.Fragment>
      </Provider>
    );
    return this.createDocument(element);
  }
}

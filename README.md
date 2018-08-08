# TVML React App

POC React TVML application

The main goal is to check how the TVML application will be handled by react

## Using
- prop-types
- @babel
- eslint
- gulp
- webpack
- React 16.4
- axios
- redux
- css-loader
- route-parser (not yed tested)

### So far
It seems to be working despite the pascal-case tag and attributes warnings 

## Run
```js
// to install dependencies
npm install
```
```js
// will serve http://localhost:9001/application.js
npm start
```

## Events 
React synthetic events are not being fired  

#### @TODO
take a look at the `react/packages/shared/invokeGuardedCallbackImpl.js`

#### To fire an event 
we need to create a reference and attach an event listener

take a look at [Form.jsx](/src/Screen/Form.jsx)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';


// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
// const store = createStore(reducers, {}, compose(
//   applyMiddleware(),
//   window.devToolsExtension ? window.devToolsExtension() : f => f,
// ));

// we now wrap App in a Provider
ReactDOM.render(<App />, document.getElementById('main'));

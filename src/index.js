import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import moviesReducer from './reducers/movieReducer'

import store from './app/store'
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import store from './app/store';
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const reducers = combineReducers(
//   {
//     moviesReducer
//   }
// )

// const enhancers = composeEnhancers(
//     applyMiddleware(thunk)
// )

// const store = createStore(
//   reducers, 
//   enhancers,
//   );
  
ReactDOM.render( 
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

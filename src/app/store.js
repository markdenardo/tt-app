// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import  movieReducer  from '../reducers/movieReducer'

// export default configureStore({
//   reducer: {
//     movie: movieReducer
//   },
// });


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import movieReducer from '../reducers/movieReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    movieReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
import { createStore, applyMiddleware, combineReducers } from 'redux';

export const configStore = (reducers, middlewares, initalState) => createStore(
  combineReducers(reducers), initalState, applyMiddleware(...middlewares)
);

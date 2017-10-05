import { createStore, applyMiddleware, compose, combineReducers } from 'redux';


const __DEV__ = process.env.NODE_ENV !== 'production';

const enhancers = (defEnhancers, devTools = global.devToolsExtension) => (
  __DEV__ && devTools && compose(defEnhancers, devTools()) || defEnhancers
);

export const configStore = (reducers, middlewares, initalState) => createStore(
  combineReducers(reducers),
  initalState || {},
  enhancers(applyMiddleware(...middlewares))
);

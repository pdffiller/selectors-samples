import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { reducers, middlewares, SelectorsApp } from '../src';
import { SNAP_TIMESTAMP } from '../src/actions/types';
import { configStore } from './config-store';

const snapTimeStamp = dispatch => () => dispatch(
  { type: SNAP_TIMESTAMP, payload: Date.now() }
);

const store = configStore(reducers, middlewares);
setInterval(snapTimeStamp(store.dispatch), 2000);

const app = document.getElementById('app');
app.className = 'main-content flex-grid flex-grid--height-auto';

ReactDOM.render(
  <Provider store={store}>
    <SelectorsApp />
  </Provider>,
  app
);

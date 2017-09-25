import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { reducers, middlewares, SelectorsApp } from '../src';
import { configStore } from './config-store';

const store = configStore(reducers, middlewares);

const app = document.getElementById('app');
app.className = 'main-content flex-grid flex-grid--height-auto';

ReactDOM.render(
  <Provider store={store}>
    <SelectorsApp />
  </Provider>,
  app
);

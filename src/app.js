import 'babel-polyfill';
import 'styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'containers/AppContainer';
import {Provider} from 'react-redux';
import 'utils/debugUtils';
import store from 'store';

const appDiv = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  appDiv,
);

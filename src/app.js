import '@babel/polyfill';
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

log.trace('This is logger trace example');
log.debug('This is logger debug example');
log.info('This is logger info example');
log.warn('This is logger warn example');
log.error('This is logger error example');

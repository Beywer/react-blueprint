import { AppContainer } from 'containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';
import 'styles/app.scss';

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    root,
);

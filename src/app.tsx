import {AppContainer} from 'containers/AppContainer';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from 'store/configureStore';
import 'styles/app.css';

const root = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    root,
);

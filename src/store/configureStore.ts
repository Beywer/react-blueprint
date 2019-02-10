import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from 'store/reducers/rootReducer';

export function configureStore() {
    return createStore(
        rootReducer,
        undefined,
        composeWithDevTools(applyMiddleware(thunk)),
    );
}

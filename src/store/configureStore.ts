import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from 'store/reducers/rootReducer';

function configureStore() {
    return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}

export const store: Store = configureStore();

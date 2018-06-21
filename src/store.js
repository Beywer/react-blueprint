import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/rootReducer';
import {Map} from 'immutable';

const initialState = new Map();
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;

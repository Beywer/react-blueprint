import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store/rootReducer';
import thunk from 'redux-thunk';

export const store: Store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: [thunk],
});

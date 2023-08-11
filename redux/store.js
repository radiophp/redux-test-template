// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/rootReducer';

const store = configureStore({
    reducer: rootReducer
    // Middleware like thunk comes included with Redux Toolkit's configureStore
});

export default store;



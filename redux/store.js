// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/rootReducer';
import {apiSlice} from "@/redux/reducer/api";
import cartReducer from "@/redux/reducer/cart";
import storageReducer from "@/redux/reducer/storageSlice";
//import {createWrapper} from "next-redux-wrapper";

const store = configureStore({
    reducer: rootReducer,
    // Middleware like thunk comes included with Redux Toolkit's configureStore
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),

});

export default store;
//export const wrapper = createWrapper(initializeStore, { debug: true });
// Compare this snippet from redux\reducer\cart.js:
// // cart.js
//



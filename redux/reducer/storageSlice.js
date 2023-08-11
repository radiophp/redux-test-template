// storageSlice.js

import { createSlice } from "@reduxjs/toolkit";
import storage from "../../util/localStorage";

const storageInitialState = {
    cart: [],
    wishlist: [],
    compare: [],
};

const storageSlice = createSlice({
    name: 'storage',
    initialState: storageInitialState,
    reducers: {
        initLocalStorage: (state, action) => {
            console.log("initLocalStorage" ,action.payload)
            state.cart = action.payload.cart;
            state.wishlist = action.payload.wishlist;
            state.compare = action.payload.compare;
        },
    }
});

export const { initLocalStorage } = storageSlice.actions;

export default storageSlice.reducer;

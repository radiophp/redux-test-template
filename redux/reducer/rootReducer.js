// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cart';
import storageReducer from './storageSlice';
import {apiSlice} from "@/redux/reducer/api";
import settingReducers  from "@/redux/reducer/setting";
import productsReducers  from "@/redux/reducer/products";
//import wishlistReducer from './wishlistSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    // wishlist: wishlistReducer,
    storage: storageReducer,
    setting: settingReducers,
    products: productsReducers,
    [apiSlice.reducerPath]: apiSlice.reducer
});

export default rootReducer;


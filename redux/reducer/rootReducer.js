// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cart';
import storageReducer from './storageSlice';
//import wishlistReducer from './wishlistSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    // wishlist: wishlistReducer,
    storage: storageReducer
});

export default rootReducer;


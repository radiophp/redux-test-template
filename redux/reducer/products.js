import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [] };

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsProps: (state, action) => {
            console.log("setProductsProps", action.payload);
            state.products= action.payload;
        }


    }
});
// Select the whole products state
export const selectProductsState = state => state.products;

// Select products from the products state
export const selectProducts = state => {

    return state.products.products;
};

export const { setProductsProps } = productsSlice.actions;
export default productsSlice.reducer;
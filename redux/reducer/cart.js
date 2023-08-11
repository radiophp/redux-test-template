import { createSlice } from '@reduxjs/toolkit';
import storage from "../../util/localStorage";
import { deleteProduct, findProductIndexById } from "../../util/util";
import { initLocalStorage } from "./storageSlice";
const cartInitialState = {
    modal: false,
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        // initLocalStorage: (state, action) => {
        //     console.log("initLocalStorage CART" ,action.payload)
        //     return action.payload.cart;
        // },
        initCart: (state, action) => {

            if (action.payload.items){
                state.items= action.payload.items || [];

            }
            else{
                return  {
                    modal: false,
                    items: []
                }
            }
        },
        addToCart: (state, action) => {
           // console.log("add to cart cart " ,state.cart, action)
             console.log("add to cart items" ,state.items )
            // if (!state.items) {
            //     console.error("state.items is undefined or not an array");
            //     state.items = [];
            // }
            const index = findProductIndexById(state.items || [], action.payload.product.id);

            if (index !== -1) {
                state.items[index].quantity += 1;
            } else {
                if (!action.payload.product.quantity) {
                    action.payload.product.quantity = 1;
                }
                state.items.push(action.payload.product);
            }
            storage.set("dokani_cart", state);
        },
        deleteFromCart: (state, action) => {
            const newCartItems = deleteProduct(state.items, action.payload);
            state.items = newCartItems;
            storage.set("dokani_cart", newCartItems);
        },
        increaseQuantity: (state, action) => {
            const index = findProductIndexById(state.items, action.payload);
            if (index !== -1) {
                state.items[index].quantity += 1;
                storage.set("dokani_cart", state);
            }
        },
        decreaseQuantity: (state, action) => {
            const index = findProductIndexById(state.items, action.payload);
            if (index !== -1 && state.items[index].quantity > 1) {
                state.items[index].quantity -= 1;
                storage.set("dokani_cart", state);
            }
        },
        clearCart: (state) => {
            storage.set("dokani_cart", []);
            return [];
        }
    },
    extraReducers: builder => {
        builder.addCase(initLocalStorage, (state, action) => {
            console.log("initLocalStorage CART" ,action.payload.cart)

            return action.payload.cart;

        }
         );
    }
});

export const {
    initCart,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

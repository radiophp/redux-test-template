// StorageWrapper.js

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import storage from "../../util/localStorage";
import { initLocalStorage } from "@/redux/reducer/storageSlice";
import { initCart } from "@/redux/reducer/cart";
const StorageWrapper = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const cart = storage.get("dokani_cart") || [];
        const wishlist = storage.get("dokani_wishlist") || [];
        const compare = storage.get("dokani_compare") || [];
        console.log("call storage wrapper" ,cart)
        dispatch(initLocalStorage({ cart, wishlist, compare }));
        dispatch(initCart(cart));
    }, [dispatch]);

    return <>{props.children}</>;
};

export default StorageWrapper;


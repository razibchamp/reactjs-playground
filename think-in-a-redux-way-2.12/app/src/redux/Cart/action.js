import { ADDTOCART, DECREMENT_CART_ITEM, INCREMENT_CART_ITEM } from "./actionTypes"

export const addToCart = (product) => {
    return {
        type: ADDTOCART,
        payload: product
    }
}

export const incrementCartItem = (product) => {
    return {
        type : INCREMENT_CART_ITEM,
        payload: product
    }
}

export const decrementCartItem = (product) => {
    return {
        type : DECREMENT_CART_ITEM,
        payload: product
    }
}



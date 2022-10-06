import {ADDTOCART, INCREMENT_CART_ITEM} from '../redux/Cart/actionTypes';
import { DECREMENT_PRODUCT } from '../redux/Product/actionTypes';

const cartQuantityValidator = (store) => (next) => (action) => {

    const state = store.getState();

    switch (action.type) {
        case ADDTOCART:
        case INCREMENT_CART_ITEM:
        case DECREMENT_PRODUCT:
            const [actionProduct] = state.product.filter( productItem => productItem.name === action.payload.name);
            console.log(action)
            return actionProduct.quantity >= 1 ? next(action) : next({
                type: ""
            });
        default:
            return next(action);
    }
}

export default cartQuantityValidator;
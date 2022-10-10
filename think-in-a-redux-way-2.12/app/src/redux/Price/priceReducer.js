import { CALCPRICE } from '../../redux/Price/actionType';
import { ADDTOCART, DECREMENT_CART_ITEM, INCREMENT_CART_ITEM } from '../Cart/actionTypes';

const initialState = {
    total_price: 0
}

const priceReducer = (state=initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADDTOCART:
            return {
                ...state,
                total_price: state.total_price + action.payload.price * 1,
            }

        case INCREMENT_CART_ITEM:
            return {
                ...state,
                total_price: state.total_price + action.payload.price * 1,
            }

        case DECREMENT_CART_ITEM:
            return {
                ...state,
                total_price: state.total_price - action.payload.price * 1,
            }
        default:
            return {
                ...state
            }
    }

}

export default priceReducer;
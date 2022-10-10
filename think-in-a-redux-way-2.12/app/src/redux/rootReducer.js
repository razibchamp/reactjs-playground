import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import productReducer from "./Product/productReducer"
import priceReducer  from './Price/priceReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    price: priceReducer

})

export default rootReducer;
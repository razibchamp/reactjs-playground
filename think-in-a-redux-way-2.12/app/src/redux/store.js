import {applyMiddleware, createStore} from "redux"
import rootReducer from "./rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import cartQuantityValidator from "../middlewares/cartQuantityValidator";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
    cartQuantityValidator
)));

export default store;
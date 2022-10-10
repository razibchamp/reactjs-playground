import {applyMiddleware, createStore} from "redux"
import rootReducer from "./rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
)));

export default store;
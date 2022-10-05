import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import myLogger from "../middlewares/myLogger";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
    rootReducer, 
    composeWithDevTools( applyMiddleware(myLogger, logger)));

export default store;
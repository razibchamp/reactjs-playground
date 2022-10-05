import { combineReducers } from "redux";
import counterReducer from "./Counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/DynamicReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer
})

export default rootReducer;
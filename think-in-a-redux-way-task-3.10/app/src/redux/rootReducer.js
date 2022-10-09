import { combineReducers } from "redux";
import blogReducer from "./Blogs/blogReducer";
import filterReducer from "./Filters/filterReducer";
import searchReducer from "./Search/searchReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    filter: filterReducer,
    blog: blogReducer
})

export default rootReducer;
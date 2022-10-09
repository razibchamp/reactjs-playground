import { SEARCH_KEYWORD } from "./actionTypes";



const initialState = {
    keyword: ""
}

const searchReducer = (state=initialState, action) => {

    switch (action.type) {
        case SEARCH_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;
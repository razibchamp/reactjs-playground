import { CLEAR_FILTER, FILTER_BY_AUTHOR, FILTER_BY_CATEGORY } from "./actionTypes";

const initialState = {
    filter_category: '',
    filter_author_id: ''
}

const filterReducer = (state=initialState, action) => {

    switch (action.type) {
        case FILTER_BY_AUTHOR:
            return {
                ...state,
                filter_author_id: action.payload,
                filter_category : ''
            }
        
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                filter_category : action.payload,
                filter_author_id: ''
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filter_category : '',
                filter_author_id: ''
            }
        default:
            return state;
    }
}

export default filterReducer;
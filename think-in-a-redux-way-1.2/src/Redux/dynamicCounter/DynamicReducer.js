import { DCDECREMENT, DCINCREMENT } from "../dynamicCounter/actionTypes";

const initialState = {
    value : 30
}

const dynamicCounterReducer = (state = initialState , action) => {

    switch (action.type) {
        case DCINCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }

        case DCDECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
    
        default:
            return state;
    }
}

export default dynamicCounterReducer;
import { ADDTOCART, DECREMENT_CART_ITEM, INCREMENT_CART_ITEM } from "./actionTypes";


const initialState = []


const addCartProduct = (currentState, payload) => {
    const filtered = currentState.filter( (productItem) => productItem.name === payload.name );
    return filtered.length;
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            return !addCartProduct([...state], action.payload) ? [...state, {
                name: action.payload.name,
                quantity: 1,
                price: action.payload.price
            }] : [...state].map( (item) => {
                return item.name === action.payload.name ? {
                    ...item,
                    quantity: item.quantity + 1,
                } : item
            })

        case INCREMENT_CART_ITEM:
            return [...state].map( ( item ) => item.name === action.payload.name 
                ?   {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                : item)
    
        case DECREMENT_CART_ITEM:
            return [...state].map( ( item ) => item.name === action.payload.name
                ?   {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                : item)
                .filter( (item) => item.quantity > 0)

        default:
            return [...state]
    }
}

export default cartReducer;
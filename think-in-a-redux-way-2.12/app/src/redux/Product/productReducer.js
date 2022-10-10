import { DECREMENT_PRODUCT, INCREMENT_PRODUCT } from "./actionTypes";


const initialState = [
    {
        name : "Asus Vivobook X515MA",
        price : 35000,
        quantity : 20
    },
    {
        name: "Dell E1916HV 18.5 Inch",
        price: 9300,
        quantity: 35
    },
    {
        name: "Canon Eos 4000D 18MP",
        price: 36500,
        quantity: 72
    }
]

const productReducer = (state=initialState, action) => {

    switch (action.type) {
        case INCREMENT_PRODUCT:
            return state.map( (item) => {
                return item.name === action.payload.name
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item
            })

        case DECREMENT_PRODUCT:
            return state.map( (item) => {
                return item.name === action.payload.name
                ? {
                    ...item,
                    quantity: item.quantity - 1
                }
                : item
            })
            
        default:
            return [...state];
    }
}

export default productReducer;
import { CALCPRICE } from "./actionType"


export const calculatePrice = (cartProducts) => {
    return {
        type: CALCPRICE,
        payload: cartProducts
    }
}
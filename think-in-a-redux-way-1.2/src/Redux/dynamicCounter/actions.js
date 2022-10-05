import { DCDECREMENT, DCINCREMENT } from "./actionTypes"

export const dcincrement = (value) => {
    return {
        type : DCINCREMENT,
        payload: value
    }
}

export const dcdecrement = (value) => {
    return {
        type : DCDECREMENT,
        payload: value
    }
}
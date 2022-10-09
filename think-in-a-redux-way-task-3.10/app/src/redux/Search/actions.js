import { SEARCH_KEYWORD } from "./actionTypes"

export const searchByKeyword = (keyword) => {
    return {
        type: SEARCH_KEYWORD,
        payload: keyword
    }
}
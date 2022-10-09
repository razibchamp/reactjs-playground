import { CLEAR_FILTER, FILTER_BY_AUTHOR, FILTER_BY_CATEGORY } from "./actionTypes"


export const filterByAuthor = (authorId) => {
    return {
        type: FILTER_BY_AUTHOR,
        payload: authorId
    }
}

export const filterByCategory = (category) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: category
    }
}

export const clearFilter = () => {
    return {
        type: CLEAR_FILTER
    }
}
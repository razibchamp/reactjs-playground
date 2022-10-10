const fetch = require('node-fetch')
const { TODO_ADDED, TODO_FETCH, TODO_LOAD } = require("./actionType")

const todoAdded = require

const delayMiddleware = (store) => (next) => (action) => {

    if ( action.type === TODO_ADDED ) {
        console.log('I am delaying you');
        setTimeout( () => {
            next(action);
        }, 4000)

        return;

    }

    return next(action)
}

const fetchTodoMiddleware = (store) => (next) => async (action) => {

    if ( typeof action === 'function' ) {
        action(store.dispatch, store.getState);
        return;
        
    }

    return next(action)
}

module.exports = {
    delayMiddleware,
    fetchTodoMiddleware
}
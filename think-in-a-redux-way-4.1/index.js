const {createStore, applyMiddleware } = require('redux');
const { TODO_ADDED, TODO_FETCH, TODO_LOAD } = require('./actionType');
const { fetchTodos } = require('./function');
const { delayMiddleware, fetchTodoMiddleware } = require('./middlewares');


const initialState = {
    todos: []
}

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case TODO_ADDED:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload
                    }
                ]
            }
        case TODO_LOAD:
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            }
    
        default:
            break;
    }

}


const store = createStore(reducer, applyMiddleware( delayMiddleware, fetchTodoMiddleware ))

store.subscribe( () => {
    console.log(store.getState());
})

// store.dispatch({
//     type: TODO_ADDED,
//     payload: 'Learning Redux'
// })

// store.dispatch({
//     type: TODO_FETCH,
// })

store.dispatch(fetchTodos)
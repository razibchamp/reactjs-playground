const fetch = require('node-fetch');
const { TODO_LOAD } = require('./actionType');

const fetchTodos = async (dispatch, getState) => {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const todos = await response.json();

    dispatch({
        type: TODO_LOAD,
        payload: todos
    })

    console.log(`Number of update todos: ${getState().todos.length}`);
}

module.exports = {
    fetchTodos
}
import { toggled } from "../todos/actions";


const updateTodos = (todoId, completed) => {
    return async (dispatch, getState) => {

        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !completed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        
        dispatch(toggled(todoId));
    }
}

export default updateTodos;
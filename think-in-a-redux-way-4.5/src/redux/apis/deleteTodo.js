import { deleted } from "../todos/actions";


const deleteTodo = (todoId) => {
    return async (dispatch, getState) => {

        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "DELETE",
        });
        
        dispatch(deleted(todoId));
    }
}

export default deleteTodo;
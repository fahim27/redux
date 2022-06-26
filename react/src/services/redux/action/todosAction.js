import axios from "axios";
import * as actionType from "../actionType/actionType";


const getTodosRequest = () => {
    return {
        type:actionType.GET_TODOS_REQUEST
    }
}
const getTodosFail = (error) => {
    return {
        type:actionType.TODOS_REQUEST_FAILD,
        payload: error
    }
}
const getTodosSuccess = (todos) => {
    return {
        type:actionType.TODOS_REQUEST_SUCCESS,
        payload: todos
    }
}

const getAllTodos = () => (dispatch) => {
    dispatch(getTodosRequest());
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(resp => {
            dispatch(getTodosSuccess(resp.data))
        })
        .catch(e => {
            dispatch(getTodosFail(e.message))
        })
}

export default getAllTodos;

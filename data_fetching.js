//data fetching using redux,redux-thunk and axios
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const TODOS_REQUEST_SUCCESS = "TODOS_REQUEST_SUCCESS";
const TODOS_REQUEST_FAILD = "TODOS_REQUEST_FAILD";

const initialTodoState = {
    todos: [],
    isLoading: false,
    error: null
}

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodosFail = (error) => {
    return {
        type: TODOS_REQUEST_FAILD,
        payload: error
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: TODOS_REQUEST_SUCCESS,
        payload: todos
    }
}

const todosReducer = (state = todosReducer, action) => {

    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case TODOS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case TODOS_REQUEST_FAILD:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
            break;
    }
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest);
        axios.get("https://jsonplaceholder.typicode.com/todos/5")
        .then(resp=>{
            dispatch(getTodosSuccess(resp.data))
        })
        .catch(e=>{
            dispatch(getTodosFail(e.message))
        })
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk.default));

store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(fetchData())
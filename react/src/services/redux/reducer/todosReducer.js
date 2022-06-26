import * as actionType from "../actionType/actionType";

const initalState = {
    todos: [],
    isLoading: false,
    error: null
}

const todosReducer = (state = initalState, action) => {

    switch (action.type) {
        case actionType.GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionType.TODOS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case actionType.TODOS_REQUEST_FAILD:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default todosReducer;
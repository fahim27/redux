
import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const USERS = "USERS";

const initialState = {
    count: 0,
    users:['a']
}

const incrementAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}
const resetAction = () => {
    return {
        type: RESET
    }
}
const usersAction = (value) => {
    return {
        type: USERS,
        payload:value
    }
}
const incrementByValueAction = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload:value
    }
}

///CREATING REDUCER

const counterReduce = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count-1
            }
            break;

        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count+action.payload
            }
        case USERS:
            return {
                users:[...state.users,action.payload],
                count: state.count++
            }

        default:
            state
            break;
    }
}

///create store
const store = createStore(counterReduce);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementByValueAction(5));
store.dispatch(usersAction('b'));
store.dispatch(usersAction('c'));
store.dispatch(usersAction('d'));




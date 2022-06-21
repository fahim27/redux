
import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
    count: 0
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

store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(resetAction())



import { applyMiddleware, createStore } from "redux";
import todosReducer from "../reducer/todosReducer";
import counterReducer from "../reducer/counterReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
const store = createStore(combineReducers({
    todosReducer,
    counterReducer

}), applyMiddleware(thunk));

export default store;
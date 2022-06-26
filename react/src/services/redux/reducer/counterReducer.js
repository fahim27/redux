import * as actionType from "../actionType/actionType";

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                count: state.count+1
            }
        case actionType.DECREMENT:
            return {
                ...state,
                count: state.count-1
            }
        case actionType.RESET:
            return {
                ...state,
                count: 0
            }

        default:
            return state;
    }
}

export default counterReducer;
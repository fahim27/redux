import * as actionType from "../actionType/actionType";

export const incrementAction = () => {
    return {
        type: actionType.INCREMENT
    }
}
export const decrementAction = () => {
    return {
        type: actionType.DECREMENT
    }
}
export const resetAction = () => {
    return {
        type: actionType.RESET
    }
}

import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

////product const
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";


////cart const
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";


////product state
const initialProductState = {
    products: ["sugar", 'milk',],
    productsCount: 2
}

////cart State
const initialCartState = {
    cartItems: ["sugar"],
    cartItemsCount: 1
}

////product action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

///product cart action

const getCartItems = () => {
    return {
        type: GET_CART_ITEMS
    }
}
const addCartItems = (item) => {
    return {
        type: ADD_CART_ITEMS,
        payload: item
    }
}


////product reducer action
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }

        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                productsCount: state.productsCount + 1
            }
        default:
            return {
                ...state
            }
            break;
    }
}

//cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }

        case ADD_CART_ITEMS:
            return {
                cartItems: [...state.cartItems, action.payload],
                cartItemsCount: state.cartItemsCount + 1
            }
        default:
            return {
                ...state
            }
            break;
    }
}


const rootReducer = combineReducers({
    productAddR: productReducer,
    cartItemR: cartReducer
});
const store = createStore(rootReducer,applyMiddleware(logger.default));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addCartItems('ghghygb'))
//;store.dispatch(getProducts())
//store.dispatch(addCartItems())


import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer.js"
import { productsReducer } from "./products/products.reducer.js";
import { cartReducer } from "./shoppingcart/shopcart.reducer.js";

// Combine all the reducers
export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    shoppingcart: cartReducer,
});
import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer.js"
import { productsReducer } from "./products/products.reducer.js";

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
});
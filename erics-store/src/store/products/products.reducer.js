import { PRODUCT_ACTION_TYPES } from './products.types';

export const PRODUCTS_INITIAL_STATE = {
    product_catalog: [],
};

export const productsReducer = (state = PRODUCTS_INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case PRODUCT_ACTION_TYPES.SET_PRODUCTS:
            console.log('SET PRODUCT CATALOG')
            return {
                ...state,
                product_catalog: action.payload,
            };
        default:
            return state;
    }
}



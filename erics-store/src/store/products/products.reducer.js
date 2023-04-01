import { PRODUCT_ACTION_TYPES } from './products.types';

export const PRODUCTS_INITIAL_STATE = {
    product_catalog: [],
    is_loading: false,
    error: null,
};

export const productsReducer = (state = PRODUCTS_INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START:

            return {
                ...state,
                is_loading: true,
            };
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILURE:

            return {
                ...state,
                is_loading: false,
                error: action.payload,
            };

        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:

            return {
                ...state,
                is_loading: false,
                product_catalog: action.payload,
            };
        default:
            return state;
    }
}



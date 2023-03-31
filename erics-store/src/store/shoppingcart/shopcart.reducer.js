import { CART_ACTION_TYPES } from './shopcart.types';

const CART_INITIAL_STATE = {
    is_cart_visible: false,
    cart_items: [],
    total_items: 0,
    cart_total: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                is_cart_visible: payload,
            }

        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

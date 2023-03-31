import { CART_ACTION_TYPES  } from './shopcart.types';
import { createReducerAction } from '../reducer.utils';

// HELPER FUNCTIONS
const _addItem = (cart_items, product) => {
    const item_exists = cart_items.find(item => item.id === product.id);
    if (item_exists) {
        return cart_items.map(item => {
            if (item.id === product.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
    }
    return [...cart_items, { ...product, quantity: 1 }];
};

const _subtractItem = (cart_items, product) => {
    const cart_item = cart_items.find(item => item.id === product.id);
    // remove item
    if (cart_item.quantity === 1) {
        return cart_items.filter(item => item.id !== product.id);
    }
    // decrement quantity
    return cart_items.map(item => {
        if (item.id === product.id) {
            return {
                ...item,
                quantity: item.quantity - 1,
            };
        }
        return item;
    })
};

const _deleteItem = (cart_items, product) => {
    return cart_items.filter(item => item.id !== product.id);
};

const _updateCartDetails = (new_cart_items) => {
    let total_items = new_cart_items.reduce((acc, item) => acc + item.quantity, 0);
    let cart_total = new_cart_items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const payload = {
        cart_items: new_cart_items,
        total_items: total_items,
        cart_total: cart_total,
    };
    // only requires one action to update all cart details
    return createReducerAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
};
// END HELPER FUNCTIONS

export const setCartVisible = (new_toggle_state) =>
    createReducerAction(CART_ACTION_TYPES.TOGGLE_CART, new_toggle_state);

export const addItemToCart = (cart_items, product) =>
    _updateCartDetails( _addItem(cart_items, product) )

export const subtractItemFromCart = (cart_items, product) =>
    _updateCartDetails( _subtractItem(cart_items, product) )

export const deleteItemFromCart = (cart_items, product) =>
    _updateCartDetails( _deleteItem(cart_items, product) )
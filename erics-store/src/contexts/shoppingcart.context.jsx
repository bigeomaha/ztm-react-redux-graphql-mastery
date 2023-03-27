import { createContext, useEffect, useState, useReducer } from 'react';

const CART_INITIAL_STATE = {
    is_cart_visible: false,
    cart_items: [],
    total_items: 0,
    cart_total: 0,
};

const ReducerActions = {
    TOGGLE_CART: 'TOGGLE_CART',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ReducerActions.TOGGLE_CART:
            return {
                ...state,
                ...payload,
            }

        case ReducerActions.SET_CART_ITEMS:
            return {
                    ...state,
                    ...payload,
                };

        default:
            throw new Error(`CARTREDUCER - Unhandled action type: ${type}`);
    }
};

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
    if (cart_item.quantity === 1 ) {
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

export const CartViewContext = createContext({
    is_cart_visible: false,
    setCartVisible: () => null,
    cart_items: [],
    addItemToCart: () => null,
    subtractItemFromCart: () => null,
    deleteItemFromCart: () => null,
    total_items: 0,
    cart_total: 0,
});

export const CartViewProvider = ({ children }) => {
    // Using Reducer to handle state
    const [{ cart_total, total_items, cart_items, is_cart_visible }, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    const updateCartItemsReducer = (new_cart_items) => {
        let total_items = new_cart_items.reduce((acc, item) => acc + item.quantity, 0);
        let cart_total = new_cart_items.reduce((acc, item) => acc + item.quantity * item.price, 0);
        const payload = {
            cart_items: new_cart_items,
            total_items: total_items,
            cart_total: cart_total,
        };
        dispatch({ type: ReducerActions.SET_CART_ITEMS, payload: payload });
    }

    const setCartVisible = (new_toggle_state) => {
        const payload = {
            is_cart_visible: new_toggle_state,
        }
        dispatch({ type: ReducerActions.TOGGLE_CART, payload: payload });
    };

    const addItemToCart = (item) => {
        const new_cart_items = _addItem(cart_items, item);
        updateCartItemsReducer(new_cart_items);
    };

    const subtractItemFromCart = (item) => {
        const new_cart_items = _subtractItem(cart_items, item);
        updateCartItemsReducer(new_cart_items);
    };

    const deleteItemFromCart = (item) => {
        const new_cart_items = _deleteItem(cart_items, item);
        updateCartItemsReducer(new_cart_items);
    };



    // Assemble Context
    const value = {is_cart_visible, setCartVisible, cart_items, addItemToCart, subtractItemFromCart, deleteItemFromCart, total_items, cart_total};

    return (
        <CartViewContext.Provider value={value}>
            {children}
        </CartViewContext.Provider>
    );
};

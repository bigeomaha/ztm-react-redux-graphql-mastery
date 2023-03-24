import { createContext, useEffect, useState } from 'react';

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
    // HANDLE CART VISIBILITY
    const [is_cart_visible, setCartVisible ] = useState(false);
    const [total_items, setTotalItems] = useState(0);

    // HANDLE CART TOTALS
    const [cart_total, setCartTotal] = useState(0);

    // HANDLE CART ITEMS
    const [cart_items, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        const new_cart_items = _addItem(cart_items, item);
        setCartItems(new_cart_items);
    };

    const subtractItemFromCart = (item) => {
        const new_cart_items = _subtractItem(cart_items, item);
        setCartItems(new_cart_items);
    };

    const deleteItemFromCart = (item) => {
        const new_cart_items = _deleteItem(cart_items, item);
        setCartItems(new_cart_items);
    };

    // HANDLE CART TOTAL & ITEM COUNT
    useEffect(() => {
        let total_items = cart_items.reduce((acc, item) => acc + item.quantity, 0);
        let cart_total = cart_items.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setTotalItems(total_items);
        setCartTotal(cart_total);
    }, [cart_items]);

    // Assemble Context
    const value = {is_cart_visible, setCartVisible, cart_items, addItemToCart, subtractItemFromCart, deleteItemFromCart, total_items, cart_total};

    return (
        <CartViewContext.Provider value={value}>
            {children}
        </CartViewContext.Provider>
    );
};

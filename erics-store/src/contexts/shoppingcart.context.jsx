import { createContext, useEffect, useState } from 'react';

// HELPER FUNCTIONS
const _addCartItem = (cart_items, product) => {
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

export const CartViewContext = createContext({
    is_cart_visible: false,
    setCartVisible: () => null,
    cart_items: [],
    addItemToCart: () => null,
    total_items: 0,
});


export const CartViewProvider = ({ children }) => {
    // HANDLE CART VISIBILITY
    const [is_cart_visible, setCartVisible ] = useState(false);
    const [total_items, setTotalItems] = useState(0);

    // HANDLE CART ITEMS
    const [cart_items, setCartItems] = useState([]);
    const addItemToCart = (item) => {
        const new_cart_items = _addCartItem(cart_items, item);
        setCartItems(new_cart_items);
    };

    // HANDLE CART TOTAL ITEM COUNT
    useEffect(() => {
        let total_items = cart_items.reduce((acc, item) => acc + item.quantity, 0);
        setTotalItems(total_items);
    }, [cart_items]);

    // Assemble Context
    const value = {is_cart_visible, setCartVisible, cart_items, addItemToCart, total_items};

    return (
        <CartViewContext.Provider value={value}>
            {children}
        </CartViewContext.Provider>
    );
};

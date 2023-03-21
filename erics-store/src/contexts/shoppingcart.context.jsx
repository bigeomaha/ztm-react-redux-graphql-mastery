import { createContext, useEffect, useState } from 'react';

export const CartViewContext = createContext({
    is_cart_visible: false,
    setCartVisible: () => null,
});


export const CartViewProvider = ({ children }) => {
    const [is_cart_visible, setCartVisible ] = useState(false);
    const value = {is_cart_visible, setCartVisible};

    useEffect(() => {
        console.log('fetching cart items');
    }, []);

    return (
        <CartViewContext.Provider value={value}>
            {children}
        </CartViewContext.Provider>
    );
};

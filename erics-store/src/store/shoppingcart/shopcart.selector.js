import { createSelector } from 'reselect';

// Select the products BASE state
const selectShoppingCartReducer = (state) => state.shoppingcart;

// Create a selector for the shopping cart items
export const selectShoppingCartItems = createSelector(
    [selectShoppingCartReducer],
    (shoppingcart) => shoppingcart.cart_items
);

// Create a selector for the cart toggle
export const selectShoppingCartToggle = createSelector(
    [selectShoppingCartReducer],
    (shoppingcart) => shoppingcart.is_cart_visible
);

export const selectShoppingCartTotalItems = createSelector(
    [selectShoppingCartReducer],
    (shoppingcart) => shoppingcart.total_items
);

export const selectShoppingCartTotalPrice = createSelector(
    [selectShoppingCartReducer],
    (shoppingcart) => shoppingcart.cart_total
);
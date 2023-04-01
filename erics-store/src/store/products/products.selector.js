import { createSelector } from 'reselect';

// Select the products BASE state
const selectProductsReducer = state => state.products;

// Create a selector for the product catalog
export  const selectProductCatalog = createSelector(
    [selectProductsReducer],
    (products) => products.product_catalog
);

// Prevents re-rendering of components that use this selector
export const selectProducts = createSelector(
    [selectProductCatalog],
    (product_catalog) => product_catalog.reduce((acc, doc) => {
        const { title, items } = doc.data();
        acc[title.toLowerCase()] = items
        return acc;
    }, {})
);

export const selectProductsIsLoading = createSelector(
    [selectProductsReducer],
    (products) => products.is_loading
);

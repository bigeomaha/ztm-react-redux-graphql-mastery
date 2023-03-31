import { createSelector } from 'reselect';

const selectProductsReducer = state => state.products;

export  const selectProductCatalog = createSelector(
    [selectProductsReducer],
    (products) => products.product_catalog
);

export const selectProducts = createSelector(
    [selectProductCatalog],
    (product_catalog) => product_catalog.reduce((acc, doc) => {
        const { title, items } = doc.data();
        acc[title.toLowerCase()] = items
        return acc;
    }, {})
);
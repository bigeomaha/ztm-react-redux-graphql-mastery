import { PRODUCT_ACTION_TYPES } from './products.types';
import { createReducerAction } from '../reducer.utils'
import { getCategoriesAndDocuments } from '../../utils/product-store.utils';


export const fetchProductCatalogStart = () =>
    createReducerAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductCatalogSuccess = (product_catalog) =>
    createReducerAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, product_catalog);

export const fetchProductCatalogFailure = (error) =>
    createReducerAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILURE, error);

// This function retrieves the product catalog from the database on initial load.
export const fetchProductCatalogAsync = () => async (dispatch) => {
    dispatch(fetchProductCatalogStart());
    try {
        const initial_products = await getCategoriesAndDocuments();
        dispatch(fetchProductCatalogSuccess(initial_products));
    } catch (error) {
        dispatch(fetchProductCatalogFailure(error));

    }
}
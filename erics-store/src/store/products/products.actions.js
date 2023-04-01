import { PRODUCT_ACTION_TYPES } from './products.types';
import { createReducerAction } from '../reducer.utils'

export const fetchProductCatalogStart = () =>
    createReducerAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductCatalogSuccess = (product_catalog) =>
    createReducerAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, product_catalog);

export const fetchProductCatalogFailure = (error) =>
    createReducerAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILURE, error);

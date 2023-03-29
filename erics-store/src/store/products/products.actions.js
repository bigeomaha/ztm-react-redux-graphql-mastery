import { PRODUCT_ACTION_TYPES } from './products.types';
import { createReducerAction } from '../reducer.utils'

export const setProductCatalog = (product_catalog) =>
    createReducerAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, product_catalog);
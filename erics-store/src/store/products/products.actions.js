import { createReducerAction } from '../reducer.utils'

export const setProductCatalog = (product_catalog) =>
    createReducerAction('GET_PRODUCTS', product_catalog);
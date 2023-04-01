import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/product-store.utils';
import { fetchProductCatalogFailure, fetchProductCatalogSuccess } from './products.actions';
import { PRODUCT_ACTION_TYPES } from './products.types';

// This function retrieves the product catalog from the database on initial load.
export function* fetchProductCatalogAsync() {
    try {
        // CALL replaces the async await function from THUNK
        // getCategoriesAndDocuments('products') becomes call(function , params)
        const initial_products = yield call(getCategoriesAndDocuments, 'products');
        // PUT replaces the dispatch function from THUNK
        yield put(fetchProductCatalogSuccess(initial_products));
    } catch (error) {
        // PUT replaces the dispatch function from THUNK
        yield put(fetchProductCatalogFailure(error));
    }
}

export function* onFetchProductCatalogStart() {
    yield takeLatest(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START, fetchProductCatalogAsync);
}

export function* productCatalogSaga() {
    const product_sagas = [
        call(onFetchProductCatalogStart),
    ];
    yield all(product_sagas);
}

import { all, call } from 'redux-saga/effects';
import { productCatalogSaga } from './products/products.saga';

export function* rootSaga() {
    yield all([
        call(productCatalogSaga),
    ]);
}
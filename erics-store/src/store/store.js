import { compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer} from './root-reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import createSagaMiddleware  from 'redux-saga';
import { rootSaga } from './root-saga';


// Handle the middleware and enhancers
const user_logger = (process.env.NODE_ENV !== 'production' && logger);
const sagaMiddleware = createSagaMiddleware();
const middleWares = [user_logger, sagaMiddleware].filter(Boolean);

// REDUX DEVTOOLS
const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

// Handle the persist config
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user', 'products'],
    whitelist: ['shoppingcart']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


// Create the store with the root reducer
//  and the initial state & export persistor
export const store = createStore(persistedReducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
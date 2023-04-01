import { compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer} from './root-reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// Handle the middleware and enhancers
let user_logger = (process.env.NODE_ENV !== 'production' && logger);
const middleWares = [user_logger, thunk].filter(Boolean);

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
export const persistor = persistStore(store);
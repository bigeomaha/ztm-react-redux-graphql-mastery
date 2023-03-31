import { compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer} from './root-reducer';


// Handle the middleware and enhancers
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));


// Create the store with the root reducer and the initial state
export const store = createStore(rootReducer, undefined, composedEnhancers);
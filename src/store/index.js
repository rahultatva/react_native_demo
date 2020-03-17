import createSagaMiddleware from 'redux-saga';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducers from './rootReducer';
import rootSagas from './rootAction';
import logger from 'redux-logger';

const preloadedState = {};
const reducers = rootReducers();
const sagaMiddleware = createSagaMiddleware();
const middlerwares =
  process.env.NODE_ENV !== 'production'
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];
let composeWrapper = compose;

// Redux dev tools for development mode
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeWrapper = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }
}

// create store
export const store = createStore(
  reducers,
  preloadedState,
  composeWrapper(applyMiddleware(...middlerwares)),
);
sagaMiddleware.run(rootSagas);

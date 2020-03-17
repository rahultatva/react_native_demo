import {combineReducers} from 'redux';
import {authReducer} from './Auth/reducers';

const appReducers = {
  auth: authReducer,
};
// combining all reducers to make root Reducer
const createRootReducer = () =>
  combineReducers({
    ...appReducers,
  });

export default createRootReducer;

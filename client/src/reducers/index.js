import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import picsReducer from './pics/reducer';

export default combineReducers({
  auth: authReducer,
  pics: picsReducer
});

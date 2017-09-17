import { combineReducers } from 'redux';
// import authReducer from './auth/reducer';
import picsReducer from './pics/reducer';
import rulesReducer from './rules/reducer';

export default combineReducers({
    // auth: authReducer,
    language: rulesReducer,
    pics: picsReducer
});

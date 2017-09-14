import { combineReducers } from 'redux';
// import authReducer from './auth/reducer';
import galleryReducer from './gallery/reducer';
import locationReducer from './location/reducer';
import picsReducer from './pics/reducer';
import rulesReducer from './rules/reducer';

export default combineReducers({
  // auth: authReducer,
  gallery: galleryReducer,
  location: locationReducer,
  language: rulesReducer,
  pics: picsReducer
});

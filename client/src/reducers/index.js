import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import reviewsReducer from './reviews/reducer';
import reviewReducer from './review/reducer';
// import picsReducer from './pics/reducer';

export default combineReducers({
  auth: authReducer,
  reviews: reviewsReducer,
  currentReview: reviewReducer
  // pics: picsReducer
});

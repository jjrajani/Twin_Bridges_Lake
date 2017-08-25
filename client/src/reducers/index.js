import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import reviewsReducer from './reviews/reducer';
import reviewReducer from './review/reducer';
import reviewModalReducer from './review_modal/reducer';
import selectStarsReducer from './selectStars/reducer';
import picsReducer from './pics/reducer';

export default combineReducers({
  auth: authReducer,
  reviews: reviewsReducer,
  currentReview: reviewReducer,
  showReviewModal: reviewModalReducer,
  selectStars: selectStarsReducer,
  pics: picsReducer
});

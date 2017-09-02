import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import reviewsReducer from './reviews/reducer';
import reviewReducer from './review/reducer';
import reviewModalReducer from './review_modal/reducer';
import galleryReducer from './gallery/reducer';
import selectStarsReducer from './selectStars/reducer';
import picsReducer from './pics/reducer';
import locationReducer from './location/reducer';

export default combineReducers({
  auth: authReducer,
  reviews: reviewsReducer,
  currentReview: reviewReducer,
  showReviewModal: reviewModalReducer,
  gallery: galleryReducer,
  selectStars: selectStarsReducer,
  pics: picsReducer,
  location: locationReducer
});

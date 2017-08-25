import axios from 'axios';
import t from './types';

export const createReview = (review, auth) => async dispatch => {
  if (auth !== false) review.username = auth.username;
  const res = await axios.post('/api/reviews/new', {
    text: review.text,
    username: review.username,
    rating: review.rating
  });
  dispatch({ type: t.CREATE_REVIEW, payload: res.data });
};
/*
  fetchUser uses ReduxThunk, a middleware that determines if action creator is returning a funciton.
  In so it is able to hold off calling dispatch until fetchUser says to.
 */
export const fetchReviews = () => async dispatch => {
  const res = await axios.get('/api/reviews');
  dispatch({ type: t.FETCH_REVIEWS, payload: res.data });
};

export const deleteReview = id => async dispatch => {
  await axios.delete(`/api/reviews/${id}`);

  dispatch({ type: t.DELETE_REVIEW, payload: id });
};

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

export const updateReview = event => dispatch => {
  dispatch({
    type: t.UPDATE_REVIEW,
    payload: { name: event.target.name, value: event.target.value }
  });
};

export const resetReview = () => dispatch => {
  dispatch({
    type: t.RESET_REVIEW
  });
};

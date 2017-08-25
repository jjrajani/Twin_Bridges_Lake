import axios from 'axios';
import t from './types';

export const fetchReview = id => async dispatch => {
  const res = await axios.get(`/api/reviews/${id}`);

  dispatch({ type: t.FETCH_REVIEW, payload: res.data });
};

export const updateReview = event => dispatch => {
  dispatch({
    type: t.UPDATE_REVIEW,
    payload: { name: event.target.name, value: event.target.value }
  });
};

export const selectRating = rating => dispatch => {
  dispatch({
    type: t.SELECT_RATING,
    payload: rating
  });
};

import axios from 'axios';
import t from './types';

export const fetchReview = id => async dispatch => {
  const res = await axios.get(`/api/reviews/${id}`);

  dispatch({ type: t.FETCH_REVIEW, payload: res.data });
};

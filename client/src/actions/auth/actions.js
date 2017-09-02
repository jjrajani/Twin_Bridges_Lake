import axios from 'axios';
import t from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: t.FETCH_USER, payload: res.data });
};

import axios from 'axios';
import t from './types';

/*
  fetchUser uses ReduxThunk, a middleware that determines if action creator is returning a funciton.
  In so it is able to hold off calling dispatch until fetchUser says to.
 */
export const fetchPics = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log(res.data);
  dispatch({ type: t.FETCH_PICS, payload: res.data });
};

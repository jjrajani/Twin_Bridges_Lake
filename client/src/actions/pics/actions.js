// https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=29224b1aa64ce41ffc9966ef92598e22&per_page=10&format=json&nojsoncallback=1

import axios from 'axios';
import t from './types';

/*
  fetchUser uses ReduxThunk, a middleware that determines if action creator is returning a funciton.
  In so it is able to hold off calling dispatch until fetchUser says to.
 */
export const fetchPics = () => async dispatch => {
  console.log('fetching pics');
  const res = await axios.get(
    'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=29224b1aa64ce41ffc9966ef92598e22&user_id=154182966@N06&per_page=10&format=json&nojsoncallback=1'
  );
  let photos = res.data.photos.photo.map(p => {
    return buildURL(p.server, p.id, p.secret);
  });
  console.log('___PHOTOS____', photos);
  dispatch({ type: t.FETCH_PICS, payload: photos });
};

const buildURL = (server, id, secret) => {
  return `http://farm5.staticflickr.com/${server}/${id}_${secret}.jpg`;
};

export const addPic = picture => dispatch => {
  console.log('adding picture', picture);
  // const res = await axios.get('/api/current_user');
  // console.log(res.data);
  dispatch({ type: t.ADD_PIC, payload: picture });
};

export const deletePic = id => dispatch => {
  console.log('deleting picture:', id);
  // const res = await axios.get('/api/current_user');
  // console.log(res.data);
  dispatch({ type: t.ADD_PIC, payload: id });
};

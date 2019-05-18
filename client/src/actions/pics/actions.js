// https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=29224b1aa64ce41ffc9966ef92598e22&per_page=10&format=json&nojsoncallback=1

import axios from "axios";
import t from "./types";

// const KEY = "29224b1aa64ce41ffc9966ef92598e22";
const KEY = "29224b1aa64ce41ffc9966ef92598e22";
const USER_ID = "154182966@N06";
const method = "flickr.people.getPublicPhotos";
const perPage = "50";

/*
  fetchUser uses ReduxThunk, a middleware that determines if action creator is returning a funciton.
  In so it is able to hold off calling dispatch until fetchUser says to.
 */
export const fetchPics = () => async dispatch => {
  const res = await axios.get(
    `https://api.flickr.com/services/rest/?method=${method}&api_key=${KEY}&user_id=${USER_ID}&per_page=${perPage}&format=json&nojsoncallback=1`
  );

  const photos = res.data.photos.photo.map(buildURL);

  dispatch({ type: t.FETCH_PICS, payload: photos });
};

const buildURL = ({ server, id, secret }) =>
  `http://farm5.staticflickr.com/${server}/${id}_${secret}.jpg`;

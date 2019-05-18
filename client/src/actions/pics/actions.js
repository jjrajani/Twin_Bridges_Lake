// https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=29224b1aa64ce41ffc9966ef92598e22&per_page=10&format=json&nojsoncallback=1
import axios from "axios";
import t from "./types";

/*
  fetchUser uses ReduxThunk, a middleware that determines if action creator is returning a funciton.
  In so it is able to hold off calling dispatch until fetchUser says to.
 */
export const fetchPics = () => async dispatch => {
  const flickr = await axios.get("/api/gallery");
  console.log("flickr", flickr);
  const photos = flickr.data.photos.photo.map(buildURL);

  dispatch({ type: t.FETCH_PICS, payload: photos });
};

const buildURL = ({ server, id, secret }) =>
  `http://farm5.staticflickr.com/${server}/${id}_${secret}.jpg`;

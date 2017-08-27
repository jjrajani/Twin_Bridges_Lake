// https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=29224b1aa64ce41ffc9966ef92598e22&per_page=10&format=json&nojsoncallback=1

import t from '../../actions/pics/types';

export default function(state = [], action) {
  switch (action.type) {
    case t.FETCH_PICS:
      return action.payload;
    case t.ADD_PIC:
      return [action.payload, ...state];
    case t.DELETE_PIC:
      return state.filter(p => p.id !== action.payload);
    // return action.payload || false;
    default:
      return state;
  }
}

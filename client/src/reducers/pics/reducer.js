import t from '../../actions/pics/types';

export default function(state = [], action) {
  switch (action.type) {
    case t.FETCH_PICS:
      return action.payload || false;
    default:
      return state;
  }
}
import t from '../../actions/reviews/types';

export default function(state = [], action) {
  switch (action.type) {
    case t.FETCH_REVIEWS: {
      return action.payload;
    }
    // case t.CREATE_REVIEW: {
    // }
    // case t.DELETE_REVIEW: {
    // }
    default:
      return state;
  }
}

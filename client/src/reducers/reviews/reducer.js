import t from '../../actions/reviews/types';

export default function(state = [], action) {
  switch (action.type) {
    case t.FETCH_REVIEWS: {
      return action.payload;
    }
    case t.CREATE_REVIEW: {
      return [action.payload, ...state];
    }
    case t.DELETE_REVIEW: {
      return state.filter(r => r._id !== action.payload);
    }
    case t.FILTER_REVIEWS: {
      console.log('filtering reviews', action.payload);
      return action.payload;
    }
    default:
      return state;
  }
}

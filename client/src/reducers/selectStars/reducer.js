import t from '../../actions/selectStars/types';

export default function(state = { rating: 0, hoverRating: 0 }, action) {
  switch (action.type) {
    case t.ON_MOUSE_ENTER: {
      return {
        rating: state.rating,
        hoverRating: action.payload
      };
    }
    case t.ON_MOUSE_LEAVE: {
      return {
        rating: state.rating,
        hoverRating: state.rating
      };
    }
    case t.SELECT_RATING: {
      return {
        rating: action.payload,
        hoverRating: action.payload
      };
    }
    case t.RESET_STARS: {
      return {
        rating: 0,
        hoverRating: 0
      };
    }
    default:
      return state;
  }
}

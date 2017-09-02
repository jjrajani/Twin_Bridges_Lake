import t from '../../actions/review/types';

export default function(
  state = { text: '', username: 'guest', rating: 0 },
  action
) {
  switch (action.type) {
    case t.UPDATE_REVIEW: {
      let newState = Object.assign({}, state);
      newState.review[action.payload.name] = action.payload.value;
      return newState;
    }
    case t.RESET_REVIEW: {
      return { text: '', username: 'guest', rating: 0 };
    }
    case t.SELECT_RATING: {
      let newState = Object.assign({}, state);
      newState.review.rating = action.payload;
      return newState;
    }
    default:
      return state;
  }
}

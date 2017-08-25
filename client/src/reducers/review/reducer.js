import t from '../../actions/review/types';

export default function(
  state = { text: '', username: 'guest', rating: 0 },
  action
) {
  switch (action.type) {
    // case t.CREATE_REVIEW: {
    //
    // }
    case t.UPDATE_REVIEW: {
      var newState = Object.assign({}, state);
      newState[action.payload.name] = action.payload.value;
      return newState;
    }
    case t.SELECT_RATING: {
      var newState = Object.assign({}, state);
      newState.rating = action.payload;
      return newState;
    }
    default:
      return state;
  }
}

import t from '../../actions/reviews/types';

export default function(state = { list: [], modal: false }, action) {
  switch (action.type) {
    case t.FETCH_REVIEWS: {
      let newState = Object.assign({}, state);
      newState.list = action.payload;
      return newState;
    }
    case t.CREATE_REVIEW: {
      let newState = Object.assign({}, state);
      newState.list = [action.payload, ...state.list];
      return newState;
    }
    case t.DELETE_REVIEW: {
      let newState = Object.assign({}, state);
      newState.list = state.list.filter(r => r._id !== action.payload);
      return newState;
    }
    case t.FILTER_REVIEWS: {
      let newState = Object.assign({}, state);
      newState.list = action.payload;
      return newState;
    }
    case t.TOGGLE_MODAL: {
      let newState = Object.assign({}, state);
      newState.modal = !state.modal;
      return newState;
    }
    default:
      return state;
  }
}

import t from '../../actions/review_modal/types';

export default function(state = false, action) {
  switch (action.type) {
    case t.TOGGLE_MODAL: {
      return !state;
    }
    default:
      return state;
  }
}

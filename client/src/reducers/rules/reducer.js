import t from '../../actions/rules/types';

export default function(state = 'english', action) {
  switch (action.type) {
    case t.TOGGLE_RULES:
      return action.payload;
    default:
      return state;
  }
}

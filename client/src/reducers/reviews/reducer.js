import t from '../../actions/reviews/types';

export default function(state = { list: [], modal: false }, action) {
  switch (action.type) {
    case t.FETCH_REVIEWS: {
      return {
        list: action.payload,
        modal: state.modal
      };
    }
    case t.CREATE_REVIEW: {
      return {
        list: [action.payload, ...state.list],
        modal: state.modal
      };
    }
    case t.DELETE_REVIEW: {
      return {
        list: state.list.filter(r => r._id !== action.payload),
        modal: state.modal
      };
    }
    case t.FILTER_REVIEWS: {
      return {
        list: action.payload,
        modal: state.modal
      };
    }
    case t.TOGGLE_MODAL: {
      return {
        list: state.list,
        modal: !state.modal
      };
    }
    default:
      return state;
  }
}

import t from '../../actions/gallery/types';

export default function(state = { currentImage: '' }, action) {
  switch (action.type) {
    case t.SELECT_IMAGE: {
      return {
        currentImage: action.payload
      };
    }
    default:
      return state;
  }
}

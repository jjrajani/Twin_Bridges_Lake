import t from '../../actions/gallery/types';

export default function(state = { currentImage: '', modal: false }, action) {
  switch (action.type) {
    case t.SELECT_IMAGE: {
      return {
        currentImage: action.payload,
        modal: true
      };
    }
    case t.TOGGLE_MODAL: {
      console.log('toggling modal', state);
      return { currentImage: state.currentImage, modal: !state.modal };
    }
    default:
      return state;
  }
}

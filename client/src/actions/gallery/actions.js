import t from './types';

export const selectImage = image => dispatch => {
  dispatch({ type: t.SELECT_IMAGE, payload: image });
};

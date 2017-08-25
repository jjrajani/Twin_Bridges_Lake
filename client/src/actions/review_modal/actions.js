import t from './types';

export const toggleModal = () => async dispatch => {
  dispatch({ type: t.TOGGLE_MODAL });
};

import t from './types';

export const onMouseEnter = rating => dispatch => {
  dispatch({
    type: t.ON_MOUSE_ENTER,
    payload: rating
  });
};
export const onMouseLeave = rating => dispatch => {
  dispatch({
    type: t.ON_MOUSE_LEAVE,
    payload: rating
  });
};

export const selectRating = rating => dispatch => {
  dispatch({
    type: t.SELECT_RATING,
    payload: rating
  });
};

export const resetStars = () => dispatch => {
  dispatch({
    type: t.RESET_STARS,
    payload: 0
  });
};

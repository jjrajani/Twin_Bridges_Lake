import t from './types';

export const markerClick = (props, marker) => dispatch => {
  dispatch({ type: t.MARKER_CLICK, payload: { props, marker } });
};

export const mapClicked = () => dispatch => {
  dispatch({ type: t.MAP_CLICKED, payload: {} });
};

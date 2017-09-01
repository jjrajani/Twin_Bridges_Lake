import t from '../../actions/location/types';

export default function(
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {}
  },
  action
) {
  switch (action.type) {
    case t.MARKER_CLICK: {
      return {
        selectedPlace: action.payload.props,
        activeMarker: action.payload.marker,
        showingInfoWindow: true
      };
    }
    case t.MAP_CLICKED: {
      if (state.showingInfoWindow === true) {
        return {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}
        };
      }
      return state;
    }
    default:
      return state;
  }
}

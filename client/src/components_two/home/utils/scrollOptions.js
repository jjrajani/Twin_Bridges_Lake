/*
  Scroll settings set to correspond to home page ScrollElements
  see src/components/Home
*/

/*
  Scroll Setting Options correlate to react-scroll library.
  see https://github.com/fisshy/react-scroll
  {
    offset: Number,
    smooth: Boolean,
    duration: Number
  }
*/
const scrollDuration = 1000;
const smoothScroll = true;
const navBarHeight = 51;
const horizontalLineHeight = 41;

const homeScrollPaddings = {
  /* Scroll padding for header height */
  header: {
    offset: -navBarHeight,
    smooth: smoothScroll,
    duration: scrollDuration
  },
  /* Scroll padding for header height plus horizonatial line height */
  headerAndHorizLine: {
    offset: -(navBarHeight - horizontalLineHeight),
    smooth: smoothScroll,
    duration: scrollDuration
  }
};
export default homeScrollPaddings;

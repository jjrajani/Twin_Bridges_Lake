//72157689006206145

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchPics();
  }
  render() {
    return (
      <div className="gallery">
        <div className="row">
          <div className="col-xs-12">
            <div className="logo">
              <i className="fa fa-camera-retro" />
              <h1>Gallery</h1>
            </div>
            <p>
              Checkout some of the fish that were caught at Twin Bridges Lake.
            </p>
            <p>
              Email pictures of your catches to{' '}
              <a href="mailto:twin.bridges.lake.fishing@gmail.com">
                twin.bridges.lake.fishing@gmail.com
              </a>{' '}
              and we will add them to the gallery!
            </p>
          </div>
          <div className="col-xs-12">
            <ul className="image_list">
              {this.props.pics.map(p => {
                return (
                  <a
                    href={p}
                    className="img_wrapper col-xs-12 col-sm-6 col-md-4"
                    target="blank"
                  >
                    <li
                      key={p}
                      className="image_item"
                      style={{ backgroundImage: `url(${p})` }}
                    />
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
// const Gallery = ({ fetchPics, pics, selectImage }) => {
//   return (
//     <ul className="image-list">
//       {pics.map(p => {
//         return (
//           <li
//             key={p}
//             className="image-item"
//             style={{ backgroundImage: `url(${p})` }}
//           />
//         );
//       })}
//     </ul>
//   );
// };

function mapStateToProps({ pics }) {
  return { pics };
}

export default connect(mapStateToProps, {
  fetchPics: actions.picsActions.fetchPics,
  selectImage: actions.galleryActions.selectImage
})(Gallery);
//onClick={selectImage.bind(this, p)}
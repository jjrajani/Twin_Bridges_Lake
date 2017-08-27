import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import ZoomImage from './components/ZoomImage';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ''
    };
  }
  componentDidMount() {
    this.props.fetchPics();
  }
  selectImage(url) {
    this.props.toggleModal();
    this.setState({ currentImage: url });
  }
  render() {
    console.log('gallery props', this.props);
    return (
      <div className="gallery">
        <ZoomImage
          close={this.props.toggleModal}
          showClass={this.props.showGalleryModal === true ? '' : 'hidden'}
          image={this.state.currentImage}
        />
        <ul className="image-list">
          {this.props.pics.map(p => {
            return (
              <li
                key={p}
                className="image-item"
                style={{ 'background-image': `url(${p})` }}
                onClick={this.selectImage.bind(this, p)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ pics, showGalleryModal }) {
  return { pics, showGalleryModal };
}

export default connect(mapStateToProps, {
  fetchPics: actions.picsActions.fetchPics,
  toggleModal: actions.galleryModalActions.toggleModal
})(Gallery);

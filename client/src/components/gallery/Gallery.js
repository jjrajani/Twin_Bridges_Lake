import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import ZoomImage from './components/ZoomImage';
import ScrollTo from './components/ScrollTo';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }
  componentDidMount() {
    this.props.fetchPics();
  }
  closeModal() {
    this.props.toggleModal();
  }
  selectImage(url) {
    this.props.selectImage(url);
    this.setState({
      scrollY: window.scrollY
    });
    this.props.toggleModal();
  }
  render() {
    return (
      <ScrollTo y={this.state.scrollY}>
        <div className="gallery">
          <ZoomImage
            close={this.closeModal.bind(this)}
            showClass={this.props.showGalleryModal === true ? '' : 'hidden'}
            image={this.props.gallery.currentImage}
          />
          <ul className="image-list">
            {this.props.pics.map(p => {
              return (
                <li
                  key={p}
                  className="image-item"
                  style={{ backgroundImage: `url(${p})` }}
                  onClick={this.selectImage.bind(this, p)}
                />
              );
            })}
          </ul>
        </div>
      </ScrollTo>
    );
  }
}

function mapStateToProps({ pics, showGalleryModal, gallery }) {
  return { pics, showGalleryModal, gallery };
}

export default connect(mapStateToProps, {
  fetchPics: actions.picsActions.fetchPics,
  toggleModal: actions.galleryModalActions.toggleModal,
  selectImage: actions.galleryActions.selectImage
})(Gallery);

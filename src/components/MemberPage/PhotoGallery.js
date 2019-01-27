import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import _ from "lodash";

class PhotoGallery extends React.Component {
  state = { currentImage: 0 };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render() {
    const { photos } = this.props;

    const srcPhotos = _.map(photos, photo => ({
      src: photo,
      width: 4,
      height: 3
    }));

    return (
      <section>
        <Gallery photos={srcPhotos} onClick={this.openLightbox} />
        <Lightbox
          images={srcPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </section>
    );
  }
}

export default PhotoGallery;

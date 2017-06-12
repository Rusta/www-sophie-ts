import React, { Component, PropTypes } from 'react'
import Lightbox from 'react-image-lightbox'

const GalleryImage = img =>
  <div className="gallery-item">
    <h6 className="gallery-item-title">{img.imageTitle}</h6>
    <div
      role="button"
      onClick={img.showImage}
      className="gallery-item-image" style={{ backgroundImage: `url('${img.image}')` }}
    />
    <p>{img.imageDescr}</p>
  </div>

class Gallery extends Component {

  constructor(...args) {
    super(...args)
    this.state = {
      inViewImageIndex: null,
    }
    this.showImage = this.showImage.bind(this);
  }

  showImage(index) {
    this.setState({
      inViewImageIndex: index,
    })
  }

  render() {
    const { data } = this.props;
    const { inViewImageIndex } = this.state;
    const { showImage } = this;
    let inViewImage;
    if (typeof inViewImageIndex === 'number' && (inViewImageIndex > -1)) {
      inViewImage = data.images[inViewImageIndex];
    }
    return (
      <div className="gallery">
        <h2 className="gallery-title">{data.title}</h2>
        <div className="gallery-content" dangerouslySetInnerHTML={{ __html: data.body }} />
        <div className="gallery-images">
          {data.images.map((img, index) => {
            const showImageInline = () => {
              showImage(index);
            }
            return (
              <GalleryImage key={img.image} {...img} showImage={showImageInline} />
            )
          })}
        </div>
        {inViewImage &&
          <Lightbox
            mainSrc={inViewImage.image}
            imageTitle={inViewImage.imageTitle}
            imageCaption={inViewImage.imageDescr}
            nextSrc={data.images[(inViewImageIndex + 1) % data.images.length]}
            prevSrc={
              data.images[(inViewImageIndex + (data.images.length - 1)) % data.images.length]
            }
            onCloseRequest={() => this.setState({ inViewImageIndex: null })}
            onMovePrevRequest={() => this.setState({
              inViewImageIndex: (inViewImageIndex + (data.images.length - 1)) % data.images.length,
            })}
            onMoveNextRequest={() => this.setState({
              inViewImageIndex: (inViewImageIndex + 1) % data.images.length,
            })}
          />
      }
      </div>
    )
  }

}

Gallery.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        imageTitle: PropTypes.string,
        imageDescr: PropTypes.string,
      }),
    ),
  }),
}

export default Gallery

import React, { Component, PropTypes } from 'react'

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
        {/* Todo: full page image preview */}
        {/* Todo: handle next and previous buttons to shift index */}
        {inViewImage && (
          <div className="gallery-view-image">
            <h5>{inViewImage.imageTitle}</h5>
            <p>{inViewImage.imageDescr}</p>
            <img src={inViewImage.image} alt={inViewImage.imageTitle} />
          </div>
        )}
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

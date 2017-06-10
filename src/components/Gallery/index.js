import React from 'react'

const GalleryImage = img =>
  <div className="gallery-item">
    <h6 className="gallery-item-title">{img.imageTitle}</h6>
    <div className="gallery-item-image" style={{ backgroundImage: `url('${img.image}')` }} />
    <p>{img.imageDescr}</p>
  </div>

const Gallery = page =>
  <div key={page.path} className="gallery">
    <h2 className="gallery-title">{page.data.title}</h2>
    <div className="gallery-content" dangerouslySetInnerHTML={{ __html: page.data.body }} />
    <div className="gallery-images">
      {page.data.images.map(img =>
        <GalleryImage key={img.image} {...img} />
      )}
    </div>
  </div>

Gallery.propTypes = {

}

export default Gallery

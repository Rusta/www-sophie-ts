import React from 'react'

const renderImage = (data) => {
  const { imageTitle, imageDescr, image } = data;
  return (
    <div key={imageTitle}>
      <h2>{imageTitle}</h2>
      <img src={image} />
      <p>{imageDescr}</p>
    </div>
  )
}


const Gallery = ({ data }) => {
  const { title, images } = data;
  return (
    <div>
      <h1>{title}</h1>
      {images.map(image => renderImage(image))}
    </div>
  )
};

Gallery.propTypes = {
}

export default Gallery

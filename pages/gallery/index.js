import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const numImages = number =>
  `${number} ${(number === 1 ? 'image' : 'images')}`

// TODO: make these look beautiful (and move this to the component folder)
const renderGalleryItem = page =>
  <li key={page.path}>
    <Link to={prefixLink(page.path)}>
      {page.data.title} ({numImages(page.data.images.length)})
    </Link>
  </li>;

const GalleryPage = ({ route }) => {
  // filter to get just the gallery entries
  const galleryEntries = route.pages.filter(
    page => page.path.indexOf('/gallery/') === 0 && page.file.name !== 'index',
  );
  return (
    <div>
      <Helmet
        title={config.siteTitle}
        meta={[
          { name: 'description', content: "Sophie T's Blog" },
          { name: 'keywords', content: "Sophie T's, homepage, tea shop, blog, articles" },
        ]}
      />
      <h1>Gallery</h1>
      {galleryEntries.map(page => renderGalleryItem(page))}
    </div>
  );
};

GalleryPage.propTypes = {
  route: React.PropTypes.shape({
    pages: React.PropTypes.array.isRequired,
  }).isRequired,
};

export default GalleryPage;

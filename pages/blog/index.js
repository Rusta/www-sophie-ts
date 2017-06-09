import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import Helmet from 'react-helmet';

import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const renderBlogLink = page =>
  <li key={page.path}>
    <Link to={prefixLink(page.path)}>
      {page.data.title}
    </Link>
  </li>;

const BlogPage = ({ route }) => {
  // filter to get just the blog pages
  const blogPages = route.pages.filter(
    page => page.path.indexOf('/blog/') === 0 && page.file.name !== 'index',
  );
  // sort blog pages by date (most recent dates first)
  const sortedBlogPages = sortBy(blogPages, 'data.date').reverse();
  return (
    <div>
      <Helmet
        title={config.siteTitle}
        meta={[
          { name: 'description', content: "Sophie T's Blog" },
          { name: 'keywords', content: "Sophie T's, homepage, tea shop, blog, articles" },
        ]}
      />
      <h1>Blog</h1>
      {sortedBlogPages.map(page => renderBlogLink(page))}
    </div>
  );
};

BlogPage.propTypes = {
  route: React.PropTypes.shape({
    pages: React.PropTypes.array.isRequired,
  }).isRequired,
};

export default BlogPage;

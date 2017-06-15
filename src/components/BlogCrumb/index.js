import React, { PropTypes } from 'react';
// import moment from 'moment'
import sortBy from 'lodash/sortBy';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import './index.css';

//         <Link className="back-link" to={prefixLink('/')}> Back To THer Future </Link>

const dateFormat = 'YYYY-DD-MMTHH:mm:00.000Z';

const Blog = ({ page, pages }) => {
  // const date = moment(page.data.date, dateFormat);
  // const dateFriendly = date.format('dddd Do MMMM YYYY (HH:mm a)');
  // const daysAgo = date.fromNow();

  // debugger;

  const blogPages = pages.filter(
    thisPage => thisPage.path.indexOf('/blog/') === 0 && thisPage.file.name !== 'index',
  );
  // sort blog pages by date (most recent dates first)
  const sortedBlogPages = sortBy(blogPages, 'data.date').reverse();

  let pageMatchIndex;
  sortedBlogPages.forEach((thisPage, index) => {
    if (thisPage.path === page.path) {
      pageMatchIndex = index;
    }
  });

  const prevLinkIndex = sortedBlogPages[pageMatchIndex - 1] ? pageMatchIndex - 1 : -1;
  const nextLinkIndex = sortedBlogPages[pageMatchIndex + 1] ? pageMatchIndex + 1 : -1;

  //
  const prevLink = prevLinkIndex > -1
    ? <Link to={prefixLink(sortedBlogPages[prevLinkIndex].path)}>&#60;&#60; Prev</Link>
    : null;
  const nextLink = nextLinkIndex > -1
    ? <Link to={prefixLink(sortedBlogPages[nextLinkIndex].path)}>Next &#62;&#62;</Link>
    : null;

  return (
    <div className="blog-crumb">
      <div className="crumb-path">
        <Link to={prefixLink('/blog/')}>Blog</Link> &#62;
        <span>{page.data.title}</span>
      </div>
      <div className="crumb-links">
        {prevLink}
        {nextLink}
      </div>
    </div>
  );
};

Blog.propTypes = {
  page: PropTypes.any.isRequired,
  pages: PropTypes.any.isRequired,
};

export default Blog;

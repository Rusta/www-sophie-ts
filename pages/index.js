import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import moment from 'moment'

import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

const dateFormat = 'YYYY-DD-MMTHH:mm:00.000Z'

const renderBlogPost = (page) => {
  const date = moment(page.data.date, dateFormat);
  const dateFriendly = date.format('dddd Do MMMM YYYY (HH:mm a)');
  const daysAgo = date.fromNow();

  return (
    <div key={page.path} className="entry">
      <Link to={prefixLink(page.path)}>
        <h2 className="entry-title">{page.data.title}</h2>
      </Link>
      <div className="entry-meta">
        <span className="entry-date">{dateFriendly}</span>
        <span className="entry-ago">{daysAgo}</span>
      </div>
      <div className="entry-content" dangerouslySetInnerHTML={{ __html: page.data.body }} />
    </div>
  );
};

const renderBlogLink = page =>
  <li
    key={page.path}
  >
    <Link to={prefixLink(page.path)}>
      {page.data.title}
    </Link>
  </li>

const renderBlogList = (blogList) => {
  // recent blogs (show the full blog)
  const recentBlogPostList = blogList.slice(0, config.numberOfBlogsToDisplay)
  const recentBlogPosts = recentBlogPostList.map(page => renderBlogPost(page))
  // older blogs (show link to blog)
  const olderBlogPostList = blogList.slice(config.numberOfBlogsToDisplay)
  const olderBlogPosts = olderBlogPostList.map(page => renderBlogLink(page))
  return (
    <div>
      <div>
        {recentBlogPosts}
      </div>
      <div>
        <ul>
          {olderBlogPosts}
        </ul>
      </div>
    </div>
  )
}

const BlogIndex = ({ route }) => {
  // filter to get just the blog pages
  const blogPages = route.pages.filter(page => (page.path.indexOf('/blog/') === 0))
  // sort blog pages by date (most recent dates first)
  const sortedBlogPages = sortBy(blogPages, 'data.date').reverse()
  return (
    <div>
      <Helmet
        title={config.siteTitle}
        meta={[
          { name: 'description', content: 'Sophie T\'s' },
          { name: 'keywords', content: 'Sophie T\'s, homepage, tea shop, blog, articles' },
        ]}
      />
      {renderBlogList(sortedBlogPages)}
    </div>
  )
}

BlogIndex.propTypes = {
  route: React.PropTypes.shape({
    pages: React.PropTypes.array.isRequired,
  }).isRequired,
}

export default BlogIndex

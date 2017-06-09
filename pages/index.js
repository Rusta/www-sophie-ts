import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import Blog from '../src/components/Blog'

const renderBlogLink = page =>
  <li
    key={page.path}
  >
    <Link to={prefixLink(page.path)}>
      {page.data.title}
    </Link>
  </li>

const renderBlogList = (blogList) => {
  // only show markdown files (i.e. not the index page)
  const blogPosts = blogList.filter(blog => (blog.file.ext === 'md'));
  // recent blogs (show the full blog)
  const recentBlogPostList = blogPosts.slice(0, config.numberOfBlogsToDisplay)
  const recentBlogPosts = recentBlogPostList.map(page => Blog(page))
  // older blogs (show link to blog)
  const olderBlogPostList = blogList.slice(config.numberOfBlogsToDisplay)
  const olderBlogPosts = olderBlogPostList.map(page => renderBlogLink(page))
  return (
    <div>
      <div>
        {recentBlogPosts}
      </div>
      <div>
        <h4> Older posts... </h4>
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

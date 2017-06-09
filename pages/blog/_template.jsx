import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Blog from '../../src/components/Blog'

const Template = ({ children }) => {
  if (children && children.props && children.props.route && children.props.route.page) {
    // return blog index page as is
    if (children.props.route.page.file.name === 'index') {
      return <div>{children}</div>
    }
    // otherwise return a blog post
    return (
      <div>
        <Link className="back-link" to={prefixLink('/')}> Back </Link>
        {Blog(children.props.route.page)}
      </div>
    )
  }
  return null
}

Template.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Template

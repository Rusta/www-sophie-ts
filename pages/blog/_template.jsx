import React, { PropTypes } from 'react'
import Blog from '../../src/components/Blog'
import BlogCrumb from '../../src/components/BlogCrumb'

const Template = ({ children }) => {
  if (children && children.props && children.props.route && children.props.route.page) {
    // return blog index page as is
    if (children.props.route.page.file.name === 'index') {
      return <div>{children}</div>
    }
    // otherwise return a blog post
    return (
      <div>
        {BlogCrumb({ page: children.props.route.page, pages: children.props.route.pages })}
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

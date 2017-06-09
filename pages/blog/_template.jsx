import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Blog from '../../src/components/Blog'

const Template = ({ children }) => {
  if (children && children.props && children.props.route && children.props.route.page) {
    return (
      <div>
        <Link className="back-link" to="/"> Back </Link>
        {Blog(children.props.route.page)}
      </div>
    )
  }
  return null;
}

Template.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Template

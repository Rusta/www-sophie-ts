import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Gallery from '../../src/components/Gallery'

const Template = ({ children }) => {
  if (children && children.props && children.props.route && children.props.route.page) {
    // return index page as is
    if (children.props.route.page.file.name === 'index') {
      return <div>{children}</div>
    }
    // otherwise return the gallery
    return (
      <div>
        <Link className="back-link" to={prefixLink('/gallery/')}> Back </Link>
        <Gallery {...children.props.route.page} />
      </div>
    )
  }
  return null
}

Template.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Template

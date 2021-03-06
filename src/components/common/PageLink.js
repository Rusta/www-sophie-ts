import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const PageLink = ({ to, children, className }) => {
  // add a trailing slash if there is not one (to support SPA)
  // this is a requiremnet of gatsby that may be superfluous at some point
  let linkTo = to
  if (to.substr(to.length - 1) !== '/') {
    linkTo = `${to}/`
  }
  const prefixedLink = prefixLink(linkTo)
  return (
    <Link className={className} to={prefixedLink}>
      {children}
    </Link>
  )
}

PageLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
}

PageLink.defaultProps = {
  children: '',
  className: undefined,
}

export default PageLink

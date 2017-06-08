import React, { PropTypes } from 'react'

import '../src/css/styles.css'

import SiteHeader from '../src/components/SiteHeader'

const Template = ({ location, children }) => {
  const activePath = location.pathname
  return (
    <div>
      <SiteHeader activePath={activePath} />
      <main>
        {children}
      </main>
    </div>
  )
}

Template.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.any.isRequired,
}

export default Template

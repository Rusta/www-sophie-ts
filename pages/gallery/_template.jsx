import React, { PropTypes } from 'react'
import Gallery from '../../src/components/Gallery'

const Template = ({ children }) => {
  if (children && children.props && children.props.route && children.props.route.page) {
    // return gallery index page
    if (children.props.route.page.file.name === 'index') {
      return <div>{children}</div>
    }
    // return gallery component
    return <Gallery data={children.props.route.page.data}/>
  }
  return null
}

Template.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Template

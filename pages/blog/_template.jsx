import React, { PropTypes } from 'react'

const Template = ({ children }) => {
  let img = '';
  if (children.props
      && children.props.route
      && children.props.route.page
      && children.props.route.page.data
      && children.props.route.page.data.image) {
    const imgSource = `../../img${children.props.route.page.data.image}`;
    img = <img alt="Blog" src={imgSource} />
  }
  return (
    <div>
      <div className="blog--image">
        {img}
      </div>
      <div className="blog--content">
        {children}
      </div>
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Template

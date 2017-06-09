import { PropTypes } from 'react'
import Blog from '../../src/components/Blog'

const Template = ({ children }) => {
  if (children && children.props && children.props.route && children.props.route.page) {
    return Blog(children.props.route.page);
  }
  return null;
}

Template.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Template

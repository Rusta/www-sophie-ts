import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import { config } from 'config'

const MarkdDownWrapper = ({ route }) => {
  const page = route.page.data
  const siteTitle = config.siteTitle || ''
  const title = page.title || ''
  const description = page.description || ''
  const keywords = page.keywords || ''
  const meta = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
  ]
  return (
    <div className="markdown-page">
      <Helmet
        title={`${siteTitle} | ${title}`}
        meta={meta}
      />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    </div>
  )
}

MarkdDownWrapper.propTypes = {
  route: PropTypes.shape({
    page: PropTypes.shape({
      siteTitle: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default MarkdDownWrapper

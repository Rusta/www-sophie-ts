import React, { PropTypes } from 'react'
import classNames from 'classnames'

import cupsImage from './cups.jpg'

import PageLink from '../common/PageLink'

const activeClass = (path, activePath) =>
  classNames({
    active: path === activePath || (path === '/blog/' && activePath.indexOf('/blog/') > -1)
  })

const SiteHeader = ({ activePath }) =>
  <header>
    <h1> Sophie Ts Vintage Teashop </h1>
    <nav>
      <PageLink className={activeClass('/', activePath)} to={'/'}>
        Home
      </PageLink>
      <PageLink className={activeClass('/blog/', activePath)} to={'/blog/'}>
        Blog
      </PageLink>
      <PageLink className={activeClass('/about/', activePath)} to={'/about/'}>
        About Us
      </PageLink>
      <PageLink className={activeClass('/menu/', activePath)} to={'/menu/'}>
        Menu
      </PageLink>
      <PageLink className={activeClass('/tea-parties/', activePath)} to={'/tea-parties/'}>
        Tea Parties
      </PageLink>
      <PageLink className={activeClass('/gallery/', activePath)} to={'/gallery/'}>
        Gallery
      </PageLink>
      <PageLink className={activeClass('/contact-us/', activePath)} to={'/contact-us/'}>
        Contact Us
      </PageLink>
    </nav>
    <div className="banner" style={{ backgroundImage: `url(${cupsImage})` }}>
      &nbsp;
    </div>
  </header>

SiteHeader.propTypes = {
  activePath: PropTypes.string,
}

SiteHeader.defaultProps = {
  activePath: '',
}

export default SiteHeader

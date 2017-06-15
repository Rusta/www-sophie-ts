import React from 'react'
import IconTwitter from './iconTwitter'
import IconFacebook from './iconFacebook'
import IconInstagram from './iconInstagram'
import IconTripadvisor from './iconTripadvisor'

const svgProps = {
  width: '26px',
  height: '26px'
};

const SiteFooter = () =>
  <footer>
    <div className="social">
      <a href="https://www.facebook.com/SophieTsVintageTeashop/" target="_blank">
        <IconFacebook {...svgProps} />
      </a>
      <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g187045-d2278613-Reviews-Sophie_T_s_Vintage_Teashop-Peterborough_Cambridgeshire_England.html" target="_blank">
        <IconTripadvisor {...svgProps} />
      </a>
      <a href="https://twitter.com/sophietsteashop" target="_blank">
        <IconTwitter {...svgProps} />
      </a>
      <a href="https://www.instagram.com/explore/locations/400433675/sophie-ts-vintage-teashop/" target="_blank">
        <IconInstagram {...svgProps} />
      </a>
    </div>
    <small className="attribution"> Icons by FlatIcon </small>
  </footer>

export default SiteFooter

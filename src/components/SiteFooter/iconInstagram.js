import React from 'react'

export default ({width, height}) => {
  return (
    <svg viewBox="0 0 26 26" width={width} height={height}>
      <g>
        <path style={{"fill":"#fff"}} d="M20,7c-0.551,0-1-0.449-1-1V4c0-0.551,0.449-1,1-1h2c0.551,0,1,0.449,1,1v2c0,0.551-0.449,1-1,1H20z" />
        <path style={{"fill":"#fff"}} d="M13,9.188c-0.726,0-1.396,0.213-1.973,0.563c0.18-0.056,0.367-0.093,0.564-0.093
        c1.068,0,1.933,0.865,1.933,1.934c0,1.066-0.865,1.933-1.933,1.933s-1.933-0.866-1.933-1.933c0-0.199,0.039-0.386,0.094-0.565
        C9.4,11.604,9.188,12.274,9.188,13c0,2.107,1.705,3.813,3.813,3.813c2.105,0,3.813-1.705,3.813-3.813S15.105,9.188,13,9.188z" />
        <g>
          <path style={{"fill":"#fff"}} d="M13,7c3.313,0,6,2.686,6,6s-2.688,6-6,6c-3.313,0-6-2.686-6-6S9.687,7,13,7 M13,5
          c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S17.411,5,13,5L13,5z" />
        </g>
        <path style={{"fill":"#fff"}} d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
        C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M24,9h-6.537C18.416,10.063,19,11.461,19,13
        c0,3.314-2.688,6-6,6c-3.313,0-6-2.686-6-6c0-1.539,0.584-2.938,1.537-4H2V4.875C2,3.29,3.29,2,4.875,2h16.25
        C22.711,2,24,3.29,24,4.875V9z" />
      </g>
    </svg>
  );
}
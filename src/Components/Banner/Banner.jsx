import React from 'react'
import './Banner.css'

const Banner = ({banner}) => {
  return (
    <div id="banner" >
      <img src={banner} alt="Banner" />
    </div>
  )
}

export default Banner

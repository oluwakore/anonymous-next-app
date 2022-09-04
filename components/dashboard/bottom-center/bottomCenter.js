import React, { useState } from 'react'
import './bottomCenter.scss'
import ImageSlider from '../image-slider/imageSlider'

function BottomCenter() {
  return (
    <div  className='bottom-center-container'>
      <div className='bottom-left-part'>
      <h1 style={{ color: "#0e0b8b"}}>x</h1>
      </div> 
      <ImageSlider />
    </div>
  )
}

export default BottomCenter
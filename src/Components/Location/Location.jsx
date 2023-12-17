import React from 'react'
import './Location.css'
import location from '../../assets/location.jpg'
import Arrow from '../../assets/arrow.png'

const Location = () => {
  return (
    <div className='Location' id='Location'>
      <div className='locationHeader'>
        <span>Our Shop <span className='colorfullSpan'>Location</span></span>
      </div>
      <div className='locationMain'> 
        <div className='leftLocation'>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>2443 Oak Ridge Omaha, QA 45065</p>
          </div>
          <div></div>
          <div>
            <span>Open Hours :</span>
            <span>Monday - Friday</span>
            <span>09.00 AM - 05.00 PM</span>
            <span>Saturday - Sunday</span>
            <span>10.00 AM - 08.00 PM</span>
          </div>
          <div></div>
          <button>
            <img src={Arrow} alt="" />
            See Map
          </button>
        </div>
        <div className='rightLocation'>
          <img src={location} alt="location" />
        </div>
      </div>
    </div>
  )
}

export default Location
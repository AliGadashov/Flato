import React from 'react'
import './Newsletter.css'
import x from '../../assets/Berry Smoothie.png'

const Newsletter = () => {
  return (
    <div className='Newsletter' id='Newsletter'>
          <div>
            <span>Join Our <span className='colorfullSpan'>Newsletter</span></span>
            <div>
              <input type="email" placeholder='Email address'/>
              <button>Subscibe Now</button>
            </div> 
          </div> 
    </div>
  )
}

export default Newsletter
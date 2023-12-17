import React from 'react'
import './HamburgerMenu.css'

const HamburgerMenu = () => {
  return (
    <div className='HamburgerMenu'>
        <label class="hamburger-menu">
          <input type="checkbox" />
        </label>
        <aside class="sidebar">
            <div>
                <a href="../Hero">Home</a>
            </div>
            <div>
                <a href="../">About Us</a>
            </div>
            <div>
                <a href="/Pages">Pages</a>
            </div>
            <div>
                <a href="/Newsletter">Contact Us</a>
            </div>
        </aside>
    </div>
  )
}

export default HamburgerMenu
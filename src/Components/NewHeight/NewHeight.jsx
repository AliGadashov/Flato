import React from 'react'
import './NewHeight.css'
import NewHeightIceCream from '../../assets/new-height.png'

const NewHeight = () => {
  return (
    <div className='NewHeight' id='NewHeight'>

      

      <div className="leftNewHeight">
        <img src={NewHeightIceCream} alt="" />
      </div>
      <div className="rightNewHeight">
        <div>
          <span>Taking Ice Cream To New </span>
          <span className='colorfullSpan'>Heights</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet elementum ante. Sed mattis sapien vel vestibulum lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce a fermentum leo. Integer sem nulla, pretium vel purus vel, venenatis vehicula turpis.</p>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default NewHeight
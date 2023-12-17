import React from 'react'
import './Reason.css'
import ChooseIceCream from '../../assets/choose-you-icecream.png'
import { ReasonData } from '../../data/ReasonData'

const Reason = () => {
  return (
    <div className='Reason' id='Reason'>
      <div className="leftReason">
        <div>
          <span>Why Choose Our </span>
          <span className='colorfullSpan'>Ice Cream</span>
          <p>Maecenas nibh lorem, imperdiet a sollicitudin rhoncus, commodo non erat. Suspendisse turpis tellus, pretium sit amet lacinia ut</p>
        </div>
        <div>
          <div className="reasonCategories">
            {ReasonData.map((reason) =>(
              <div className='reasonCategory'>
               {reason.image}
                <div>
                  <span>{reason.heading}</span>
                  <span>{reason.details}</span>
                </div>
           </div>
              ))}
          </div>
        </div>
      </div>
      <div className="rightReason">
        <img src={ChooseIceCream} alt="ChooseIceCream" />
      </div>
    </div>
  )
}

export default Reason
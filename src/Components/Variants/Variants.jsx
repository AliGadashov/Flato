import React from 'react'
import './Variants.css'
import {VariantsData} from '../../data/VariantsData'

const Variants = () => {
  return (
    <div className='Variants' id='Variants'>
      <div className="variantHeader">
        <span>Ice Cream <span className='colorfullSpan'>Variant</span></span>
      </div>

      <div className="variantsCategories">
        {VariantsData.map((variants) =>(
          <div className='variantsCategory'>
              {variants.image}
              <span>{variants.heading}</span>
              <span>{variants.details}</span>
          </div>
          ))}
      </div>
    </div> 
  )
}

export default Variants
import React from 'react'
import './Product.css'
import {ProductData} from '../../data/ProductData'

const Product = () => {
  return (
    <div className='Product' id='Product'>
      <div className='productHeader'>
        <span>Our Featured <span className='colorfullSpan'>Product</span></span>
      </div>
      <div className="productCategories">
        {ProductData.map((product) =>(
          <div className='productCategory'>
            {product.image}
            <span>{product.heading}</span>
            <span>{product.price}</span>
            <button>Check It Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
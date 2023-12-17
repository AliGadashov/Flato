import React from 'react'
import './Testimonials.css'
import { TestimonialData } from '../../data/TestimonialData'

const Testimonials = () => {
  return (
    <div className='Testimonials' id='Testimonials'>
      <div>
        <span>Our Customer <span className='colorfullSpan'>Testimonial</span></span>
        <p>Pellentesque fermentum interdum orci at mattis. Duis sit amet mi eget turpis euismod placerat. Sed in posuere neque, tincidunt ultrices nisl.</p>
      </div>
      <div className="testimonialCategories">
        {TestimonialData.map((testimonial) =>(
          <div className='testimonialCategory'>
              <div className='stars'>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star" ></i>
              </div>

              <span>{testimonial.comment}</span>
              
              <div>
                {testimonial.image}
                <div>
                  <span>{testimonial.name}</span>
                  <span>{testimonial.job}</span>
                </div>
              </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Testimonials
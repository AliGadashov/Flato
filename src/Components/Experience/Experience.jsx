import React from 'react'
import './Experience.css'
import Caramel from '../../assets/caramel-ice-cream.png'

const Experience = () => {
  return (
    <div className='Experience' id='Experience'>  
        <div className="leftExperience">
            <img src={Caramel} alt="" />    
        </div>
        <div className="rightExperience">
            <div>
                <span>Taste It. </span>
                <span className='colorfullSpan'>Experience It.</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div>
                <div className='left'>
                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Duis viverra tristique</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Nulla lobortis sodales</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Quisque mollis libero</span>
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Proin facilisis mauris</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Fusce ligula tortor</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Nunc ligula massa</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
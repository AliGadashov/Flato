import React from 'react'
import './Story.css'
import {StoryData} from '../../data/StoryData'


const Story = () => {
  return (
    <div className='Stories' id='Stories'>

      <div>
        <span>Story <span className='colorfullSpan'>Around Us</span></span>
        <p>Maecenas nibh lorem, imperdiet a sollicitudin rhoncus, commodo non erat. Suspendisse turpis tellus, pretium sit amet lacinia ut</p>
      </div>
      
      <div className='story'>
        {StoryData.map((story) =>(
          <div className='storyCategory'>
            <div>
              
              <div class="etiquet-price">
                <p>{story.day}</p>
                <p>{story.month}</p>
                <div></div>
              </div>

              <div>
                {story.image}
              </div>
            
            </div>
            
            <div>
              <span>{story.heading}</span>
              <span>{story.comments}</span>
              <button>read more</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Story
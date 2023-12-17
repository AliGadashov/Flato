import BestIceCreamShop from '../assets/Best Ice Cream Shop In Town.jpg';
import FamilyIceCreamShop from '../assets/Your Family Ice Cream Shop.jpg';
import IceCreamTime from '../assets/Its Ice Cream Time.jpg';

export const StoryData = [
    {
      image:
        <div className='storySquare'>
           
            <img 
            src={BestIceCreamShop} alt="BestIceCreamShop" 
        />
       
        </div>
        ,

      day:"24",
      month:"Jan",
      heading: "Best Ice Cream Shop In Town",
      comments:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ornare mauris. Quisque ullamcorper lacus dolor, vel mattis dolor facilisis at. Curabitur et ex vitae diam eleifend auctor mollis id magna.",
    },
    {
      image:  
        <div className='storySquare'>
          
            <img 
            src={FamilyIceCreamShop} alt="FamilyIceCreamShop" 
        />
        
        </div>,
        
      day:"30",
      month:"July",
      heading: "Your Family Ice Cream Shop",
      comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ornare mauris. Quisque ullamcorper lacus dolor, vel mattis dolor facilisis at. Curabitur et ex vitae diam eleifend auctor mollis id magna.",
    },
    {
        image:  
        <div className='storySquare'>
           
            <img 
            src={IceCreamTime} alt="IceCreamTime" 
        />
       
        </div>,

      day:"7",
      month:"Feb",
      heading: "It's Ice Cream Time!",
      comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ornare mauris. Quisque ullamcorper lacus dolor, vel mattis dolor facilisis at. Curabitur et ex vitae diam eleifend auctor mollis id magna.",
    },
   
  ];
  
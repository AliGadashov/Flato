import IceCone from '../assets/Ice Cone.png';
import Scoop from '../assets/Scoop Delish.png';
import Berry from '../assets/Berry Smoothie.png';
import Smooth from '../assets/Smooth Serving.png';

export const VariantsData = [
    {
      image:
        <div className='variantsCircle'>
            <img 
            src={IceCone} alt="Ice Cone" 
        />
        </div>
        ,
      heading: "Ice Cone",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      image:  
        <div className='variantsCircle'>
            <img 
            src={Scoop} alt="Scoop" 
        />
        </div>,
      heading: "Scoop Delish",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
        image:  
        <div className='variantsCircle'>
            <img 
            src={Berry} alt="Berry" 
        />
        </div>,
      heading: "Berry Smoothie",
      details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
        image:  
        <div className='variantsCircle'>
            <img 
            src={Smooth} alt="Smooth" 
        />
        </div>,
      heading: "Smooth Serving",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
  ];
  
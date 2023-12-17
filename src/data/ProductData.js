import Strawberry from '../assets/Strawberry Ice Waffle.png';
import Quadruple from '../assets/Quadruple Delight.png';
import Vanilla from '../assets/Vanilla Caramel Sauce.png';

export const ProductData = [
    {
      image:
        <div className='productCircle'>
            <img 
            style={{width: '10rem', height: '10rem'}}
            src={Strawberry} alt="Strawberry" 
        />
        </div>
        ,
      heading: "Strawberry Ice Waffle",
      price:
        "$ 5.99",
    },
    {
      image:  
        <div className='productCircle'>
            <img 
            style={{width: '10rem', height: '10rem'}}
            src={Quadruple} alt="Quadruple" 
        />
        </div>,
      heading: "Quadruple Delight",
      price:
      "$ 5.99",
    },
    {
        image:  
        <div className='productCircle'>
            <img 
            style={{width: '10rem', height: '10rem'}}
            src={Vanilla} alt="Vanilla" 
        />
        </div>,
      heading: "Vanilla Caramel Sauce",
      price:
      "$ 5.99",
    },
   
  ];
  
import './App.css';
import Hero from './Components/Hero/Hero';
import NewHeight from './Components/NewHeight/NewHeight';
import Variants from './Components/Variants/Variants';
import Reason from './Components/Reason/Reason';
import Product from './Components/Product/Product';
import Experience from './Components/Experience/Experience';
import Testimonials from './Components/Testimonials/Testimonials';
import Location from './Components/Location/Location';
import Newsletter from './Components/Newsletter/Newsletter';
import Story from './Components/Story/Story';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <NewHeight/>
      <Variants/>
      <Reason/>
      <Product/>
      <Experience/>
      <Testimonials/>
      <Location/>
      <Newsletter/>
      <Story/>
      <Footer/>
    </div>
  );
}

export default App;

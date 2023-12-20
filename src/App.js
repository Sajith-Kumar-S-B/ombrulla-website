import './App.css';
import About from './Components/About/About';
import BannerOne from './Components/Banner/BannerOne';
import BannerTwo from './Components/Banner/BannerTwo';
import Blogs from './Components/Blogs/Blogs';
import Company from './Components/Company/Company';
import Customers from './Components/Customers/Customers';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Testimonial from './Components/Testimonials/Testimonial';

function App() {
  return (
    <>
   
 <div className="App">
 <Header/>
     <Home/>
    
     <BannerOne/>
     <About/>
     <BannerTwo/>
     <Products/>
    
     <Company/>
     <Customers/>
     <Testimonial/>
     <Blogs/>
     <Footer/>
     </div>
  
    </>
   
  );
}

export default App;

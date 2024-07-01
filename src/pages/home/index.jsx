import About from "./components/about";
import Blog from "./components/blog";
import Collection from "./components/collection";
import Hero from "./components/hero";
import Productionflow from "./components/productionflow";
import Services from "./components/services";
import Techstat from "./components/techstat";
import Testimonial from "./components/testimonial";

// rafce: it generate a default export 
const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <About/>
        <Collection/>
        <Techstat/>
        <Testimonial/>
        <Productionflow/>
        <Blog/>


    </div>
  )
}

export default Home;
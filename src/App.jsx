import { register } from "swiper/element/bundle";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedAuthors from "./components/FeaturedAuthors";
import FeatuedBooks from "./components/FeatuedBooks";
import TopSellingbook from "./components/TopSellingbook";
import Weeklybook from "./components/Weeklybook";
import Footer from "./components/Footer";
// register Swiper custom elements
register();
function App() {
  return (
    <footer>
      <Navbar />
      <Hero />
      <FeaturedAuthors />
      <FeatuedBooks />
      <TopSellingbook />
      <Weeklybook />
      <Footer />
    </footer>
  );
}

export default App;

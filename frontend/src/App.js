import './App.css';
import Hero from '../src/components/Hero'
import Navbar from './components/Navbar';
import ActivitiesHero from './components/ActivitiesHero';
import { Footer } from './components/Footer';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div >

      <Navbar />
      <Hero />
      <AboutUs />
      <ActivitiesHero />
      <Footer />
    </div>
  );
}

export default App;

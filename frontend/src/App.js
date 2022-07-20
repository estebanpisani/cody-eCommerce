import './App.css';
import Events from '../src//pages/Events';
// import Hero from '../src/components/Hero'
import Navbar from './components/Navbar';
import ModalEvent from './components/ModalEvent';
import Store from './pages/Store';

function App() {
  return (
    <div >
      <Navbar />
      <Events />
      {/* <Hero /> */}
      {/* <Store></Store> */}
    </div>
  );
}

export default App;

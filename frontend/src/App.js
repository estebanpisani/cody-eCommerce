import './App.css';

// import Hero from '../src/components/Hero'
import Store from './pages/Store'
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
// import Cart from './components/CartItem'
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Home from './pages/Home';



function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
      <Navbar />
      <ShoppingCart />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/store" element={<Store />} />
        {/* <Route path="/Cart" element={<Cart />} /> */}
        
      </Routes>
      </div>
      <Footer />




    </div>
  );
}

export default App;

import './App.css';
import Events from '../src//pages/Events';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
// import Hero from '../src/components/Hero'

import Navbar from './components/Navbar';
import ModalEvent from './components/ModalEvent';
import Store from './pages/Store';
import ShoppingCart from './components/ShoppingCart';
// import Cart from './components/CartItem'
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Home from './pages/Home';



function App() {
  return (
    <div className='page-container'>
      <Navbar />
      <div className='content-wrap'>

        <ShoppingCart />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/eventos" element ={<Events/>}/>
          

        </Routes>
      </div>
      <Footer />
    </div>



  );
}

export default App;

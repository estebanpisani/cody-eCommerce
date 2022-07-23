import './App.css';
import Events from '../src//pages/Events';
import Navbar from './components/Navbar';
import ModalEvent from './components/ModalEvent';
import Store from './pages/Store';
import ShoppingCart from './components/ShoppingCart';
// import Cart from './components/CartItem'
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import userActions from '../src/redux/actions/userActions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginAndSignUp from './components/LoginAndSignUp';



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token')

      dispatch(userActions.VerificateToken(token))
    }
  }, [])

  return (
    <div className='page-container'>
      <Navbar />
      <div className='content-wrap'>

        {/* <ShoppingCart /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/login" element={<LoginAndSignUp />} />


        </Routes>
      </div>
      <Footer />
    </div>



  );
}

export default App;

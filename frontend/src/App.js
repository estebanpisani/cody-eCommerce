import './App.css';
import Events from '../src//pages/Events';
import Navbar from './components/Navbar';
import ModalEvent from './components/ModalEvent';
import Store from './pages/Store';
// import Cart from './components/CartItem'
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import userActions from '../src/redux/actions/userActions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginAndSignUp from './components/LoginAndSignUp';
import { ToastContainer, Zoom } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from '../src/components/UserProfile'


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
      <ToastContainer position="bottom-left"
            theme='dark'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover 
            transition={Zoom}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/login" element={<LoginAndSignUp />} />
          <Route path="/user" element={<UserProfile />} />


        </Routes>
      </div>
      <Footer />
    </div>



  );
}

export default App;

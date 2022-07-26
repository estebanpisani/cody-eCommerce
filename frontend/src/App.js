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
import eventsActions from './redux/actions/eventsActions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginAndSignUp from './components/LoginAndSignUp';
import { ToastContainer, Zoom } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import { useSelector } from 'react-redux';


function App() {
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch()

  useEffect (() => {
    setTimeout(()=>{
      window.scrollTo(0, 0)
    },500)
  })

  let user = useSelector(store => store.userReducer.user);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token')

      dispatch(userActions.VerificateToken(token))
      console.log(token)
    }
  }, [])


  useEffect(() => {
    dispatch(eventsActions.getEvents())

  }, [reload])

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
          {!user&&<Route path="/login" element={<LoginAndSignUp />} />}
          <Route path='/*' element={<Home />} />
      

        </Routes>
      </div>
      <Footer />
      <ScrollToTop style={{backgroundColor:"transparent", borderRadius:"50%", boxShadow:"none"}} smooth component={<ArrowCircleUpTwoToneIcon sx={{color:"#E04D01", backgroundColor:"#2a2550c2", borderRadius:"50%", fontSize:"10vh"}}/>}/>
    </div>



  );
}

export default App;

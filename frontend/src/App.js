import './App.css';
import Events from '../src//pages/Events';
import Navbar from './components/Navbar';
import Store from './pages/Store';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import userActions from '../src/redux/actions/userActions';
import eventsActions from './redux/actions/eventsActions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginAndSignUp from './components/LoginAndSignUp';
import { ToastContainer, Zoom } from 'react-toastify';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from 'react-scroll-to-top';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import { useSelector } from 'react-redux';
import UserProfile from '../src/components/UserProfile'
import Patita from './components/ScrollPatita';

function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  ScrollToTopOnNav();
  // const [reload, setReload] = useState(false);
  const dispatch = useDispatch()
  let user = useSelector(store => store.userReducer.user);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 500)
  })

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token')
      dispatch(userActions.verifyToken(token))
    }
    // eslint-disable-next-line 
  }, [])

  useEffect(() => {
    dispatch(eventsActions.getEvents())
    // eslint-disable-next-line 
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
          transition={Zoom} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/events" element={<Events />} />
          {!user && <Route path="/login" element={<LoginAndSignUp />} />}
          <Route path='/*' element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop style={{ backgroundColor: "transparent", borderRadius: "50%", boxShadow: "none" }} smooth component={<Patita  />} />
    </div>
  );
}

export default App;

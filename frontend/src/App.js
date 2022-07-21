import './App.css';

// import Hero from '../src/components/Hero'
import Store from './pages/Store'
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
// import Cart from './components/CartItem'

import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div >
      <Navbar />
      <ShoppingCart/>
      <Routes>
               <Route path="/store" element={<Store/>} />
               {/* <Route path="/Cart" element={<Cart />} /> */}
           
      </Routes>
   
     
    </div>
  );
}

export default App;

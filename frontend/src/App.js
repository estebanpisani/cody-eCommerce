import './App.css';

// import Hero from '../src/components/Hero'
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';

// import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div >
      <Navbar />
      <ShoppingCart/>
    
      {/* <Hero /> */}
      {/* <Routes>
               <Route path="/" element={<Store/>} />
               <Route path="/Cart" element={<Cart />} />
           
      </Routes> */}
   
     
    </div>
  );
}

export default App;

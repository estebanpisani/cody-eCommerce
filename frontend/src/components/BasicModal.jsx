import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import '../styles/sidebar.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../redux/actions/shoppingActions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#f8b384',
  border: '1px solid #581c0c',
  boxShadow: 24,
  p: 4,
};

// const productsDetail = [
//     {
//         id: 1,
//         name: 'Basic Tee',
//         description:'El café expreso es una forma de preparación de café originada en Italia.​ Debe su término a la obtención de esta bebida a través de una cafetera expreso.​',
//         images: 'https://imgur.com/rMuohfR.png',
//         price: '$35',
//         stock:20,
//         categories: [
//             'desayuno', 
//             'merienda'
//         ],
//         variations:[
//              'frappuccino', 'naranja', 'frutilla', 'manzana'
//         ]
        
//     },
//     {
//         id: 2,
//         name: 'Cheesecake',
//         description:'El café expreso es una forma de preparación de café originada en Italia.​ Debe su término a la obtención de esta bebida a través de una cafetera expreso.​',
//         images: 'https://i.imgur.com/0C7ptLx.png',
        
//         price: '$35',
//         stock:20,
//         categories: [
//             'desayuno', 
//             'merienda'
//         ],
//         variations:[
//              'frappuccino', 'naranja', 'frutilla', 'manzana'
//         ]
        
//     },
//     {
//         id: 3,
//         name: 'Strawberrycake',
//         description:'El café expreso es una forma de preparación de café originada en Italia.​ Debe su término a la obtención de esta bebida a través de una cafetera expreso.​',
//         images: 'https://imgur.com/rMuohfR.png',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         stock:20,
//         categories: [
//             'desayuno', 
//             'merienda'
//         ],
//         variations:[
//              'frappuccino', 'naranja', 'frutilla', 'manzana'
//         ]
        
//     },
//     {
//         id: 4,
//         name: 'Strawberrycake',
//         description:'El café expreso es una forma de preparación de café originada en Italia.​ Debe su término a la obtención de esta bebida a través de una cafetera expreso.​',
//         images: 'https://imgur.com/rMuohfR.png',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         stock:20,
//         categories: [
//             'desayuno', 
//             'merienda'
//         ],
//         variations:[
//              'frappuccino', 'naranja', 'frutilla', 'manzana'
//         ]
        
//     }
// ]


export default function BasicModal({data, functionReload}) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const [age, setAge] = React.useState('');
 const ReloadChange= functionReload
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div>
        
{/* <Button  class="viewmore-button button hover:bg-white text-white font-bold py-1 px-3 border-b-4 border-blue-500 hover:border-blue-500 rounded">
      Ver más
</Button> */}
<button className="addToCart-button boton4" onClick={handleOpen}>Ver más</button>

  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='BoxModal' sx={style}>
            {/* <div className='all-info'> */}
            {/* <div className='image-name'>    */}
          {/* <img
             
             className='image-modal'
            src={data.image}
            alt="product"
          
          /> */}
  
    
            {/* <Typography className='fontfamily'  id="modal-modal-title" variant="h6" component="h2">
            {data.name}
           
          </Typography>     */}
          {/* </div> */}
       

          {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sabores</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>{data.variations[0]}</MenuItem>
        <MenuItem value={20}>{data.variations[1]}</MenuItem>
        <MenuItem value={30}>{data.variations[2]}</MenuItem>
      </Select>
    </FormControl>    */}
    {/* <div> 
      <p>precio: {data.price}</p> 
      <p>stock: {data.stock}</p>  
      <p> {data.categories[0]}</p> 
      <p>{data.categories[1]}</p>
     </div>  */}
    
         
          {/* </div> */}
          {/* <div className='description-modal'> <Typography id="modal-modal-description" sx={{ mt: 5, mb:5, width:400 }}>
           {data.description} 
          </Typography>  </div> */}
           
    
          <div className='add-cart'>
           
        
             
            <ProductItem  key={data._id} data={data} addToCart={() =>
              dispatch(addToCart(data._id))} functionReload={ReloadChange} handleClose={handleClose}
            class="button hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded  ">Agregar al carrito</ProductItem>
          </div>
     
        </Box>
      </Modal>
    </div>
  );
}
//condicional si hay variaciones.



import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
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
// console.log(productsDetail)

export default function BasicModal({data}) {
    console.log(data)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
        
<Button onClick={handleOpen} class="button hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded">
      Ver más
</Button>
      

  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='all-info'>
            <div className='image-name'>   
          <img
             
             className='image-modal'
            src={data.imageSrc}
            alt="product"
          
          />
  
    
            <Typography className='fontfamily'  id="modal-modal-title" variant="h6" component="h2">
            {data.name}
           
          </Typography>    
          </div>
       
          <div className='select-detail'>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
    </FormControl>   
    <div> 
      <p>precio: {data.price}</p> 
      <p>stock: {data.stock}</p>  
      <p> {data.categories[0]}</p> 
      <p>{data.categories[1]}</p>
     </div> 
    
         
          </div>
          </div>
          <div className='description-modal'> <Typography id="modal-modal-description" sx={{ mt: 5, mb:5, width:400 }}>
           {data.description} 
          </Typography>  </div>
           
    
          <div className='add-cart'>
            <Button class="button hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded  ">Agregar al carrito</Button>
          </div>
     
        </Box>
      </Modal>
    </div>
  );
}




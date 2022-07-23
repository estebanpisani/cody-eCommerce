import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import codymore from '../media/cody2.png'

    

const ProductItem = ({ data, addToCart }) => {
    let { id, name, price, description, image, stock, variations, categories } = data;

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
      <div className='MoreBorder' style={{padding: "1rem" }}>
            <div className='imgs-box'>
        
            <img className='codymore' src={codymore}></img>

            <div className='MoreProduct'>
            <img

            className='image-modal MoreImg'
            src={image}
            alt="product"

          />
          <h4 className="text-sm fontfamily MoreName">{name}</h4>
          </div>
          </div>
          {/* <img
          className='image-modal MoreCody'
          src={codymore}
          alt="product"
          /> */}
          
        
        
        
      <div className='MoreBuy'>
        
      <h5 className='MoreStock'>Disponible: {stock}</h5>
        <FormControl color='warning' className='MoreSelect' sx={{ m: 1, minWidth: 120}} size="small">
      <InputLabel color='warning' id="demo-select-small">Elige</InputLabel>
      <Select
        color='warning'
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem color='warning' value={10}>{variations[0]}</MenuItem>
        <MenuItem color='warning' value={20}>{variations[1]}</MenuItem>
        <MenuItem color='warning' value={30}>{variations[2]}</MenuItem>
      </Select>
    </FormControl>
    <h5 className='MorePrice'>${price}.00</h5>
    
    </div>
        <button className="addToCart-button boton3" onClick={() => addToCart(id)}>Agregar</button>
      </div>
    );
    
  };
  
  export default ProductItem;
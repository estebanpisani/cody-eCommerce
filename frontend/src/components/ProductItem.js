import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


    

const ProductItem = ({ data, addToCart }) => {
    let { id, name, price, description, image, stock, variations, categories } = data;

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
      <div style={{ border: "thin solid gray", padding: "1rem" }}>
            <img

            className='image-modal'
            src={image}
            alt="product"

          />
        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <h5>disponible: {stock}</h5>
        <h3>{description}</h3>
        <p> {categories[0]}</p> 
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sabores</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>{variations[0]}</MenuItem>
        <MenuItem value={20}>{variations[1]}</MenuItem>
        <MenuItem value={30}>{variations[2]}</MenuItem>
      </Select>
    </FormControl>
        <button className="addToCart-button" onClick={() => addToCart(id)}>Agregar</button>
      </div>
    );
    
  };
  
  export default ProductItem;
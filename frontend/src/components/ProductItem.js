import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import productActions from '../redux/actions/productActions';
import shoppingActions from "../redux/actions/shoppingActions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductItem = ({ data, functionReload, handleClose }) => {

  let { _id, name, price, image, stock } = data;
  const dispatch = useDispatch();
  const [opcion, setOpcion] = useState(10);
  const [inputName, setInputname] = useState(name);
  const [inputStock, setInputstock] = useState(stock);
  const [inputPrice, setInputprice] = useState(price);
  const [inputImage, setInputImage] = useState(image);

  const user = useSelector(store => store.userReducer.user);

  const handleChange = (event) => {
    setOpcion(event.target.value);
  };

  async function deleteProduct() {
    if (window.confirm(`¿Seguro que desea eliminar ${name}?`)) {
      await dispatch(productActions.deleteProduct(_id))
        .then(response => {
          if (response.data.success) {
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
        })
      functionReload();
    }
  };

  async function modifyProduct(event) {
    const modifiedProduct = {
      name: inputName,
      price: inputPrice,
      stock: inputStock,
      image: inputImage,
      id: _id
    }
    await dispatch(productActions.modifyProduct(modifiedProduct));
    functionReload();
  };

  return (
    <div className="box-modal w-4/5 sm:w-96">
      <div className='more-border scroll-products'>
        <img className='image-modal w-24 sm:w-32' src={image} alt="product" />
        <div className='flex flex-col lg:flex-row justify-around items-center w-full'>
          {user?.user.role === 'admin' ?
            <div className='more-data my-2 flex flex-col items-center justify-around'>
              <label for="product-name-input" className='text-lg'>Nombre:</label>
              <input type='text' defaultValue={name} value={inputName} onChange={(event) => setInputname(event.target.value)} className='w-3/4 text-lg font-products my-1' name='product-name-input' id='product-name-input' />
              <label for="product-stock-input" className='mt-2 text-lg'>Stock:</label>
              <input className='my-1 rounded p-2 w-3/4 my-1' type='number' defaultValue={stock} onChange={(event) => setInputstock(event.target.value)} name='product-stock-input' id='product-stock-input' />
              <label for="product-price-input" className='mt-2 text-lg'>Precio: </label>
              <input className='my-1 rounded p-2 w-3/4 my-1' type='number' defaultValue={price} onChange={(event) => setInputprice(event.target.value)} name='product-price-input' id='product-price-input' />
              <label for="product-img-input" className='mt-2 text-lg'>Imagen (URL): </label>
              <input className='my-1 rounded p-2 w-3/4 my-1' type='text' defaultValue={image} onChange={(event) => setInputImage(event.target.value)} name='product-img-input' id='product-img-input' />
            </div>
            :
            <>
              <h4 className="text-lg font-products">{name}</h4>
              <div className='more-data my-2'>
                <p>Disponible:</p>
                <p>{stock} unidades</p>
              </div>
              {data.variations.length > 0 &&
                <FormControl color='warning' className='more-select' sx={{ m: 2, minWidth: 120 }} size="small">
                  <InputLabel color='warning' id="demo-select-small">Variedades:</InputLabel>
                  <Select
                    color='warning'
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={opcion}
                    defaultValue={10}
                    label="Opción"
                    onChange={handleChange}
                  >
                    {data.variations.map((item, i) => (
                      <MenuItem color='warning' key={i} value={(i + 1) * 10}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              }
              <p className='more-data my-2'>${price}.00</p>
            </>
          }
        </div>

        {user?.user.role === 'admin' ?
          <div className='admin-container'>
            <h3 className='admin-title'>« Administrador »</h3>
            <div className='w-full flex flex-col sm:flex-row justify-around items-center' >
              <button className="  button-admin" onClick={modifyProduct}>Guardar<ModeEditIcon /></button>
              <button className=" button-admin" onClick={deleteProduct}>Eliminar<DeleteIcon /></button>
            </div>
          </div>
          : user?.user.role === 'user' ?
            <button className="addToCart-button boton3" onClick={() => dispatch(shoppingActions.addToCart(data._id))}>Agregar</button>
            :
            <p className="text-base font-products">Inicia sesión para agregar este producto a tu pedido</p>
        }
      </div>
    </div>
  );

};

export default ProductItem;


import * as React from 'react';
import Box from '@mui/material/Box';
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

  let { _id, name, price, description, image, stock, variations } = data;
  const dispatch = useDispatch();
  const [opcion, setOpcion] = useState(10);
  const [inputname, setInputname] = useState(name);
  const [inputstock, setInputstock] = useState(stock);
  const [inputprice, setInputprice] = useState(price);

  const user = useSelector(store => store.userReducer.user);

  const handleChange = (event) => {
    setOpcion(event.target.value);
  };

  async function deleteProduct(event) {
    await dispatch(productActions.deleteProduct(_id))
      .then(response => {
        if (response.data.success) {
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
      })
    functionReload()
  };

  async function modifyProduct(event) {
    const modifiedProduct = {
      name: inputname,
      price: inputprice,
      stock: inputstock,
      id: _id
    }
    await dispatch(productActions.modifyProduct(modifiedProduct))
    functionReload()
    handleClose()
  };

  return (
    <div className='box-modal w-4/5 sm:w-3/5 md:w-2/5 h-4/6 sm:h-5/6'>
      <div className='more-border'>
        <img className='image-modal' src={image} alt="product" />
        {user?.user.role === 'admin' ?
          <input type='textarea' defaultValue={name} value={inputname} onChange={(event) => setInputname(event.target.value)} className='more-name text-sm font-products' />
          :
          <h4 className="text-lg font-products">{name}</h4>
        }

        <div className='flex flex-col lg:flex-row justify-around items-center w-full'>
          {user?.user.role === 'admin' ?
            <>
              <p>Stock:</p>
              <input type='textarea' defaultValue={stock} onChange={(event) => setInputstock(event.target.value)} className='more-stock' />
              <p>Precio: </p>
              <input type='textarea' defaultValue={price} onChange={(event) => setInputprice(event.target.value)} className='more-price'></input>
            </>
            :
            <>
              <div className='more-data my-2'>
                <p>Disponible:</p>
                <p>{stock} unidades</p>
              </div>
              <FormControl color='warning' className='more-select' sx={{ m: 2, minWidth: 120 }} size="small">
                <InputLabel color='warning' id="demo-select-small">Variedades:</InputLabel>
                <Select
                  color='warning'
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={opcion}
                  defaultValue={10}
                  label="Opcion"
                  onChange={handleChange}
                >
                  <MenuItem color='warning' value={10}>{variations[0]}</MenuItem>
                  <MenuItem color='warning' value={20}>{variations[1]}</MenuItem>
                  <MenuItem color='warning' value={30}>{variations[2]}</MenuItem>
                </Select>
              </FormControl>
              <p className='more-data my-2'>${price}.00</p>
            </>
          }
        </div>

        {user?.user.role === 'admin' ?
          <div className='admin-container'>
            <h3 className='admin-title'>« Administrador »</h3>
            <h3 className='admin-text'>¿Que cambios desea realizar en el producto?</h3>
            <div >
              <button className="  button-admin" onClick={modifyProduct}> Modificarlo <ModeEditIcon /></button>
              <button className=" button-admin" onClick={deleteProduct}>Eliminarlo<DeleteIcon /></button>
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
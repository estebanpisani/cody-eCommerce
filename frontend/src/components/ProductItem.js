import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import codymore from '../media/cody2.png';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import productActions from '../redux/actions/productActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductItem = ({ data, addToCart, functionReload, handleClose }) => {
  let { _id, name, price, description, image, stock, variations } = data;
  const dispatch = useDispatch()

  const [opcion, setOpcion] = useState(10);
  const [inputname, setInputname] = useState(name)
  const [inputstock, setInputstock] = useState(stock)
  const [inputprice, setInputprice] = useState(price)

  const user = useSelector(store => store.userReducer.user)

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
  }

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
  }

  return (
    <div className='MoreBorder' style={{ padding: "1rem" }}>
      <div className='imgs-box'>
        <img className='codymore' alt='Cody developer' src={codymore}></img>
        <div className='MoreProduct'>
          <img
            className='image-modal MoreImg'
            src={image}
            alt="product"
          />
          {user?.user.role === 'admin' ?
            <input type='textarea' defaultValue={name} value={inputname} onChange={(event) => setInputname(event.target.value)} className='MoreName text-sm fontfamily' />
            :
            <h4 className="text-sm fontfamily MoreName">{name}</h4>
          }
        </div>
      </div>

      {user?.user.role === 'admin' ?
        <div className='MoreBuy'>
          <p>Stock:</p>
          <input type='textarea' defaultValue={stock} onChange={(event) => setInputstock(event.target.value)} className='MoreStock' />
          {/* <div>
          {variations.map((item, index) =>
            <input key={index} type='textarea' defaultValue={item} />
            )}
          </div> */}
          <p>Precio: </p>
          <input type='textarea' defaultValue={price} onChange={(event) => setInputprice(event.target.value)} className='MorePrice'></input>
        </div>
        :
        <div className='MoreBuy'>
          <h5 className='MoreStock'>Disponible: {stock}</h5>
          <FormControl color='warning' className='MoreSelect' sx={{ m: 1, minWidth: 120 }} size="small">
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
          <h5 className='MorePrice'>${price}.00</h5>
        </div>
      }

      {user?.user.role === 'admin' ?
        <div className='admin-container'>
          <h3 className='admin-title'>« Administrador »</h3>
          <h3 className='admin-text'>¿Que cambios desea realizar en el producto?</h3>
          <div >
            <button className="  button-admin" onClick={modifyProduct}> Modificarlo <ModeEditIcon /></button>
            <button className=" button-admin" onClick={deleteProduct}>Eliminarlo<DeleteIcon /></button>
          </div>
        </div>
        : user?.user.role==='user' ?
        <button className="addToCart-button boton3" onClick={() => addToCart(_id)}>Agregar</button>
        :
        <p className="text-sm fontfamily MoreName">Inicia sesión para agregar este producto a tu pedido</p>
      }
      {/* {stock > 0 ?
        
        :
        <button className="addToCart-button boton3" >Agregar</button>
    }  */}
    </div>
  );

};

export default ProductItem;
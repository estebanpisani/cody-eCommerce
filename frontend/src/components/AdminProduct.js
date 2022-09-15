import React from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import productActions from "../redux/actions/productActions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import codymore from '../media/cody2.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 3,
};

export default function AdminProduct({ functionReload }) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [stock, setStock] = React.useState('');
  const [categories, setCategories] = React.useState('');
  const variations = ['uno', 'dos', 'tres'];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function addProduct(event) {

    const newProduct = {
      name: name,
      description: description,
      image: image,
      price: price,
      stock: stock,
      // date: date,
      categories: categories,
      variations: variations,
    }
    const res = await dispatch(productActions.addProduct(newProduct))
    // setInputText("")
    functionReload()

    if (res.data.success) {
      toast.success(res.data.message)
      handleClose()
    } else {
      toast.error(res.data.message)
    }
  }


  return (
    <div className="panel-admin">
      <h3 className="admin-title">Panel de Administrador</h3>
      <button onClick={handleOpen} className="button-admin">
        Cargar producto <UploadFileIcon />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modal-admin rounded'>
          <h1 className='text-lg font-bold'>Nuevo Producto</h1>
          <img className='cody-modal hidden sm:flex' src={codymore}></img>
          <form className='flex flex-col items-center p-5 rounded w-full' onSubmit={addProduct}>
            <label className='mt-2 text-lg font-semibold' for="first-name-input">Nombre:</label>
            <input className='my-1 rounded p-2' type="text" id='first-name-input' name='first-name-input' placeholder="Capuccino" />
            <label className='mt-2 text-lg font-semibold' for="stock-input">Stock:</label>
            <input className='my-1 rounded p-2' type="number" id='stock-input' name='stock-input' placeholder="0" onChange={(event) => setStock(event.target.value)} value={stock} />
            <label className='mt-2 text-lg font-semibold' for="price-input">Precio: </label>
            <input className='my-1 rounded p-2' type="number" id='price-input' name='price-input' placeholder="0.00" onChange={(event) => setPrice(event.target.value)} value={price} />
            <label className='mt-2 text-lg font-semibold' for="email-input" >Imagen (URL):</label>
            <input className='my-1 rounded p-2' type="text" id='product-img-input' name='product-img-input' placeholder="URL" onChange={(event) => setImage(event.target.value)} value={image} />
          </form>
          <button className='btn-form my-1' type='submit'>Guardar</button>
          {/* <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch', display:'flex', flexDirection: 'column', alignItems:'center' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="filled-basic" label="Imagen" onChange={(event) => setImage(event.target.value)} value={image} variant="filled" />
            <TextField id="filled-basic" label="Nombre" onChange={(event) => setName(event.target.value)} value={name} variant="filled" />
            <TextField id="filled-basic" label="Stock" onChange={(event) => setStock(event.target.value)} value={stock} variant="filled" />
            <TextField id="filled-basic" label="Precio" onChange={(event) => setPrice(event.target.value)} value={price} variant="filled" />
            <TextField id="filled-basic" label="Categoría" onChange={(event) => setCategories(event.target.value)} value={categories} variant="filled" />
          </Box> */}
          {/* <Button onClick={addProduct}>Crear</Button> */}
        </Box>
      </Modal>
    </div >
  )
}
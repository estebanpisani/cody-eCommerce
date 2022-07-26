import React from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import codymore from '../media/cody2.png';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import productActions from "../redux/actions/productActions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function AdminProduct({functionReload}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [categories, setCategories] = React.useState('');
    // const [variations, setVariations] = React.useState('');
    const [reload, setReload] = React.useState(false)
    const dispatch = useDispatch()
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const variations = ['uno', 'dos', 'tres'];
  

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
        
          if(res.data.success){
            toast.success(res.data.message)
            handleClose()
        }else {
            toast.error(res.data.message)
        }
      
    
    }
    

    return(
        <div className="panel-admin">

          <h3 className="admin-title">Panel de Administrador</h3>
        <button  onClick={handleOpen} className="button-admin">Cargar producto <UploadFileIcon/></button>
      
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} className='modal-admin'>
        <h1>¡Nuevo Producto!</h1>
        <img className='codymore' src={codymore}></img>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', mx:7 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Imagen" onChange={(event) => setImage(event.target.value)} value={image} variant="filled" />
      <TextField id="filled-basic" label="Nombre" onChange={(event) => setName(event.target.value)} value={name} variant="filled" />
      <TextField id="filled-basic" label="Stock" onChange={(event) => setStock(event.target.value)} value={stock} variant="filled" />
      <TextField id="filled-basic" label="Precio" onChange={(event) => setPrice(event.target.value)} value={price} variant="filled" />
      <TextField id="filled-basic" label="Categoría" onChange={(event) => setCategories(event.target.value)} value={categories} variant="filled" />
     
     
    </Box>
 <Button onClick={addProduct}>Crear</Button> 

        </Box>
      </Modal>
          
        </div>
    )
}
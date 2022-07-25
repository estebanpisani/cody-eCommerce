import React from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import codymore from '../media/cody2.png';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

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

export default function AdminProduct(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const variations = ['uno', 'dos', 'tres'];
  
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
      <TextField id="filled-basic" label="Imagen" variant="filled" />
      <TextField id="filled-basic" label="Nombre" variant="filled" />
      <TextField id="filled-basic" label="Stock" variant="filled" />
      <TextField id="filled-basic" label="Precio" variant="filled" />
      <TextField id="filled-basic" label="Categoría" variant="filled" />
     
     
    </Box>
    <Button>Crear</Button>

        </Box>
      </Modal>
          
        </div>
    )
}
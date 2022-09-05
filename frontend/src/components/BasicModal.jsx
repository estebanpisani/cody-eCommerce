import * as React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProductItem from "./ProductItem";
import '../styles/sidebar.css'

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

export default function BasicModal({ data, functionReload }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ReloadChange = functionReload

  return (
    <div>
      <button className="addToCart-button boton4" onClick={handleOpen}>Ver más</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='BoxModal' sx={style}>
          <div className='add-cart'>
            <ProductItem key={data._id} data={data} functionReload={ReloadChange} handleClose={handleClose}/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}



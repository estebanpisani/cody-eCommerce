import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartItem from "./CartItem";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import { clearCart, delFromCart } from "../redux/actions/shoppingActions";

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

export default function CartIcon() {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const { cart } = state.shopping

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const  arrayPrice = cart.map((item)=>(item.price*item.quantity ))
    
    const initialValue = 0;
const sumWithInitial = arrayPrice.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

    return (
        <div>
            <Button onClick={handleOpen}><ShoppingCartOutlinedIcon className="cart-icon"/> <p className="cart-quantity ">{cart.length}</p></Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <article className="box">
                <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
                {cart.map((item, index) => (
                    <CartItem key={index} data={item}
                        delOneFromCart={() => dispatch(delFromCart(item._id))}
                        delAllFromCart={() => dispatch(delFromCart(item._id, true))} />
                ))}
          <p>total de compra: ${sumWithInitial}</p>
          
            </article>
        </Box>
      </Modal>
          
        </div>

    )
}
import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartItem from "./CartItem";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import shoppingActions from "../redux/actions/shoppingActions";
import codybuy from '../media/cody4.png';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import productActions from "../redux/actions/productActions";
import PayPal from "./Paypal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function CartIcon() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.shoppingReducer.cart);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const arrayPrice = cart?.map((item) => (item.price * item.quantity))

  const initialValue = 0;
  const sumWithInitial = arrayPrice?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const arrayQuantity = cart?.map((item) => (item.quantity))
  const sumQuantity = arrayQuantity?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  return (
    <div>
      <Button className="btn-cart-icon" onClick={handleOpen}>
        <ShoppingCartOutlinedIcon className="cart-icon" />
        {sumQuantity > 0 ?
          <p className="cart-quantity ">{sumQuantity}</p>
          :
          <p></p>
        }
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ModalCart" sx={style}>
          <article className="box BoxCart">
            <button className="btn-clear" onClick={() => dispatch(shoppingActions.clearCart())}>
              <RemoveShoppingCartIcon /> Limpiar Carrito</button>
            {cart?.length > 0 ?
              <div className="scrollProducts">
                <div>
                  {cart?.map((item, index) => (
                    <CartItem key={index} data={item}
                      delOneFromCart={() => dispatch(shoppingActions.delFromCart(item._id))}
                      delAllFromCart={() => dispatch(shoppingActions.delFromCart(item._id, true))} />
                  ))}
                </div>
              </div>
              :
              <div>
                <p>No hay productos agregados</p>
              </div>
            }
            <div className="cont-buy">
              <div className="cont-btn-buy">
                <p className="cart-total-txt fontfamily">Total: ${sumWithInitial}</p>
                <PayPal props={cart} total={sumWithInitial}></PayPal>
              </div>
              <img className="codybuy" src={codybuy}></img>
            </div>
          </article>
        </Box>
      </Modal>

    </div>

  )
}
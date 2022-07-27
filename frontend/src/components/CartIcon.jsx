import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartItem from "./CartItem";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import { clearCart, delFromCart } from "../redux/actions/shoppingActions";
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
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const { cart } = state.shopping
  const sendCart = []

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const arrayPrice = cart.map((item) => (item.price * item.quantity))

  const initialValue = 0;
  const sumWithInitial = arrayPrice.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const arrayQuantity = cart.map((item) => (item.quantity))
  const sumQuantity = arrayQuantity.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  async function buyCart() {
    cart.forEach(element => {
      let newObj = {
        id: element._id,
        units: element.quantity
      }
      sendCart.push(newObj)
    })
    const res = await dispatch(productActions.buyCart(sendCart))


    if (res.data.success) {
      toast.success(res.data.message)
    } else {
      toast.error(res.data.message)
    }
  }
  return (
    <div>
      <Button className="btn-cart-icon" onClick={handleOpen}><ShoppingCartOutlinedIcon className="cart-icon" />
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
            <button className="btn-clear" onClick={() => dispatch(clearCart())}><RemoveShoppingCartIcon /> Limpiar Carrito</button>
            {cart.length > 0 ?
              <div className="scrollProducts">
                <div>
                  {cart.map((item, index) => (
                    <CartItem key={index} data={item}
                      delOneFromCart={() => dispatch(delFromCart(item._id))}
                      delAllFromCart={() => dispatch(delFromCart(item._id, true))} />
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
                {/* <button className="addToCart-button boton4" onClick={buyCart}>Comprar</button> */}
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
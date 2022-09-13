import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity, image } = data;

  return (
    <div className="cart-product-item">
      <div className="img-name-cont">
        <h3 className="text-lg font-products">
          {name}
        </h3>
        <img className="cart-product-img" alt={name} src={image} />
      </div>
      <div className='cart-cont-info'>
        <p className='more-data w-2/5 my-1'>${price}.00 x{quantity}u</p>
        <p className='more-data w-2/5 my-1'>Subtotal: ${price * quantity}</p>
      </div>
      <div className="box-botones">
        <button className='btn-del' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={() => delOneFromCart(id)}><DeleteIcon fontSize="small" /> Borrar</button>
        <button className='btn-del' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={() => delAllFromCart(id, true)}><ClearIcon fontSize="small" />Borrar Todos</button>
      </div>
    </div>
  );
};

export default CartItem;
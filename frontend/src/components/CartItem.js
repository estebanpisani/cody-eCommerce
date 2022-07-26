import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
    let { id, name, price, quantity, image } = data;

    return (
      <div className="cartproductitem" style={{ borderBottom: "thin solid #581c0c" }}>
        <div className="imgnamecont">
        <h3 className="text-sm fontfamily">
          {name}
        </h3>
        <img className="cartproductimg" src={image}></img>
        </div>
        <div className='cart-cont-info'>
        <p className='cart-item-info'>${price}.00</p>
        <p className='cart-item-info'>Unidades: {quantity}</p>
        <p className='cart-item-price'>Subtotal: $ {price * quantity}.00</p>
        </div>
        
        
        <div className="boxBotones">
        <button className='btn-del' style={{display:'flex',flexDirection:'row',justifyContent:'center', alignItems:'center'}} onClick={() => delOneFromCart(id)}><DeleteIcon fontSize="small"/> Borrar</button>
        
        <button className='btn-del' style={{display:'flex',flexDirection:'row',justifyContent:'center', alignItems:'center'}} onClick={() => delAllFromCart(id, true)}><ClearIcon fontSize="small"/>Borrar Todos</button>
        </div>
      </div>
    );
  };
  
  export default CartItem;

  //la misma logica q ProductItem, desestructuramos el producto ya cargado al carrito y le agregamos la propiedad quantity (cantidad)
  //para q cuando agregue dos veces el mismo producto se cuenten x1 x2 x3, y no aparezca visualmente la card del producto agregfado repetidas veces.
  //entonces en la lista se agregarian al carrito productos diferentes, pero cuando agreguemos el mismo producto dos veces en el producto correspondiente diga
  //x1 x2 x3 etc.
  //multiplicamos el precio por la cantidad y a los onClick le damos la función delFromCart la cual traemos de shoppingCart
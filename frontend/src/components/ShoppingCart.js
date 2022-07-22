
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import '../styles/sidebar.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../redux/actions/shoppingActions";

const ShoppingCart = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch();
//importo el estado inicial del reducer (constante products en shoppingReducer), para renderizar las cards de productos y traer el carrito.
  const { products, cart } = state.shopping

  console.log(cart)
  //de nuestro estado vamos a desestructurar los productos y el carrito de compras (estados iniciales de shoppingReducer)

  //funciones q va a recibir el carrito de compras
  // const addToCart = (id) => {
  //   //console.log(id);
  //   dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  // };

  //esta funcion recibe como parametro el id q va a eliminar. y una variable all q nos indique si se eliminan todos o 1
  //por lo q cuando queramos eliminar todos el parametro all lo mandamos en true all=true y cuando no queramos, osea se eliminarian de a 1
  //lo inicializamos en false.
  //ternario: si quiero eliminar todo dispachame el action de remover todo del carrito sino dispachame remover uno solo del carrito.
  // const delFromCart = (id, all = false) => {
  //   //console.log(id, all);
  //   if (all) {
  //     dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  //   } else {
  //     dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  //   }
  // };

  // const clearCart = () => {
  //   dispatch({ type: TYPES.CLEAR_CART });
  // };

  //return: linea 44, mapeo de productos trayendo el componente ProductItem y le pasamos la función addToCart.
  //return:linea 50, mapeo de cada uno de los productos del carrito le pasamos al boton funcion clearCart y al componente CartItem data(props) d cada producto y la función delFromCart
  //<h3>Carrito</h3 (esto va a ser otro modal q se va a desplegar con la lista de compras q esten dentro del carrito no un h3 xd cuando apretemos el loguito del carrito)
  return (
    <div>
      <h2>Carrito de Compras</h2> 
      <h3>Productos</h3>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={()=> dispatch(clearCart())}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} 
          delOneFromCart={()=> dispatch(delFromCart(item._id))}
          delAllFromCart={()=> dispatch(delFromCart(item._id, true))} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;

//return, aca empieza todo. titulo h2, y subtitulo h3. Despliego la lista de productos, linea 38, mapeandolos para renderizarlos. el array de productos 
//viene de mi estado inicial del reducer shoppingReducer, en nuestro código, este array vendría de la carga del estado inicial de filter (productsReducer)
//el mapeo en products.jsx, pasado por props al modal.jsx.
//especificando: este componente shoppingCart.js seria nuestro modal.jsx


//RUTA DE ARCHIVOS PARA Q VAYAN VIENDOLÓ:
//inicia en shoppingCart.js =modal.jsx.
//siguiente archivo shoppingActions, siguiente archivo:shoppingReducer: considero q los reducers y las actions 
//se pueden hacer desde el reducer de Products, y las actions de products, ya q utilizamos la carga de los productos.
//Hook utilizado: useReducer: hook q maneja el estado, alternativa a redux, en nuestro código la linea 11 importariamos al reducer con react-redux
//utilizando useSelector. y al action con useDispatch (una vez hecho actions y reducers, cambiar esto, linea 11 y condiconales de la función
//añadir y eliminar del carrito, cosa de hacer el dispatch con el hook de react-redux)
//siguiente archivo:ProductItem.js va a tener la info q tiene nuestro modal (la info de los productos y el boton de añadir al carrito y este componente 
//ProductItem se va a llamar en ShoppingCart para mapear los productos).
//no existe productItem en nuestros archivos, el mapeo lo hacemos desde el modal, ahora creariamos un archivo q se llame productItem donde renderizamos toda la info
//del producto, e importamos ese archivo en el modal para mapearlo. (linea 41)
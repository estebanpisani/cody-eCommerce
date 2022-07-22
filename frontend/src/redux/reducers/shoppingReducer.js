import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types/types";




export const initialState = {
// import { TYPES } from "../actions/shoppingActions";
//importo TYPES, desestructurado de mi action shoppingActions, (TYPES, era el nombre de la constante donde guardaba en un objeto
//todas las actions)

//estado inicial: los productos q voy a usar en el ej, harcodeado.
//variable carrito con el estado inicial, array vacio. 

  products: [],
  cart: [],
};

//sintaxis q conocemos de los reducers.
//cada case es TYPES.eltipodeaction pq entramos del objeto TYPES, a la propiedad (en este caso tipo de accion).
// (si es confuso, volver a ver shoppingActions)


//case:addtoCart, declaro una variable newItem donde dentro del state voy a mi estado products 
//y con el metodo find pido q se encuentre de cada producto su id cuando sea igual al action.payload 
//(cuando el id del producto coincida con nuestro payload, almacena en esta variable ese objeto)
//si descomentan el console.log(newItem) van a ver como se guarda el producto (q se genera dentro del carrito)
//para q no quede en la consola, tenemos q pegar ese newItem en el carrito, por lo q en la variable itemInCart guardo: dentro del 
//state voy a mi estado cart q esta vacio y le pego ese producto.
//ternario:si la variable itemInCart tiene algo retornamos el state, y de la propiedad cart, d state.cart si ya el producto(item)
//dentro del carrito, generamos un mapeo q daria un "nuevo carrito de compras" pero al elemento q 
//coincida con el id del newItem, le sumamos 1 a su propiedad quanty(cantidad) osea ej:cuando sumemos alfajor, y volvamos a agregar alfajor la propiedad quanty va a ir sumandolo x1.
//si viene nulo se va a ejecutar el ultimo else, si el producto es nuevo la propiedad de cantidad la ponemos en 1 pq es el primer item q se añade al carrito.

export function shoppingReducer(state= initialState, action) {
  

  switch (action.type) {
    case "GETSTOCK":
            return{
                ...state,
                products: action.payload,
                currentState: action.payload
                 //se llena el array para q antes del search ya se vean las cards
            }
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product._id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item._id === newItem._id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item._id === newItem._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item._id === action.payload);
//si la cantidad de productos para eliminar es mayor a uno restamos 1 a la cant5idad si es true sino retornamos el producto nomas
//si es false(el elemento q queremos eliminar no es mayor a 1)q filtre el item (lo elimine) 
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item._id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item._id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
}
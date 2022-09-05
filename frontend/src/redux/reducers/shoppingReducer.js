const initialState = {
  products: [],
  cart: [],
};

const shoppingReducer = (state = initialState, action)=>{
  switch (action.type) {

    case 'GETSTOCK':
      return {
        ...state,
        products: action.payload,
        currentState: action.payload
      }

    case 'ADD_TO_CART': {
      // Busca el producto por id
      let newItem = state.products.find(
        (product) => product._id === action.payload
      );
      // Verifica si el producto ya está agregado al carrito
      let itemInCart = state.cart.find((item) => item._id === newItem._id);
      // Si lo encuentra, suma uno a su cantidad.
      //Si no, lo agrega al array de items con cantidad=1.
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

    case 'REMOVE_ONE_FROM_CART': {
      //Obtiene el elemento a borrar.
      let itemToDelete = state.cart.find((item) => item._id === action.payload);
        
      return itemToDelete.quantity > 1
        ? // Si hay más de un elemento, resta 1 a la cantidad.
        {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
        : // Si en cambio solamente hay uno, filtra la lista sin ese elemento.
        {
          ...state,
          cart: state.cart.filter((item) => item._id !== action.payload),
        };
    }

    case 'REMOVE_ALL_FROM_CART': {
      //Elimina todos los elementos con el mismo id.
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
}

export default shoppingReducer;
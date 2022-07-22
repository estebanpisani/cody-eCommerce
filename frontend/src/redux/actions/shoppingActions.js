

import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,} from "../types/types"
// export const TYPES = {
//     ADD_TO_CART: "ADD_TO_CART",
//     REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
//     REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
//     CLEAR_CART: "CLEAR_CART",
//   };
  //sintaxis del obtejo pasada a las actions q conocemos: type:"TIPO_DE_ACTION"
  
  //operaciones q hara el carrito, estan los tipos de accion guardadas en un objeto pq no hay backend, forma q encontre ya q no hay controladores.
  //cuando haya backend, se hara el dispatch de la llamada a axios correspondiente.
  //añadir al carrito, remover uno del carrito, remover todo del carrito, limpiar carrito. (controladores:add, y delete, seria el delete por id y uno nuevo 
  //q sea delete de todo el req.body,
  // es lo q se me ocurre, en el caso de no encontrar forma de plantear el controlador podemos dejas esas actions en la constante, sin controladores.)
  export const addToCart = (id) => ({type:ADD_TO_CART, payload: id});

  export const delFromCart = (id, all =false) => 
  (all
    ?{type:REMOVE_ALL_FROM_CART, payload:id}
    :{type:REMOVE_ONE_FROM_CART, payload:id});

  export const clearCart = () => ({type:CLEAR_CART}) 
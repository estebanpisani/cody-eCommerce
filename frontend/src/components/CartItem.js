const CartItem = ({ data, delFromCart }) => {
    let { id, name, price, quantity } = data;
  
    return (
      <div style={{ borderBottom: "thin solid gray" }}>
        <h4>{name}</h4>
        <h5>
          ${price}.00 x {quantity} = ${price * quantity}.00
        </h5>
        <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
        <br />
        <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        <br />
        <br />
      </div>
    );
  };
  
  export default CartItem;

  //la misma logica q ProductItem, desestructuramos el producto ya cargado al carrito y le agregamos la propiedad quantity (cantidad)
  //para q cuando agregue dos veces el mismo producto se cuenten x1 x2 x3, y no aparezca visualmente la card del producto agregfado repetidas veces.
  //entonces en la lista se agregarian al carrito productos diferentes, pero cuando agreguemos el mismo producto dos veces en el producto correspondiente diga
  //x1 x2 x3 etc.
  //multiplicamos el precio por la cantidad y a los onClick le damos la función delFromCart la cual traemos de shoppingCart
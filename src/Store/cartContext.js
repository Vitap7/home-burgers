import React from "react";

const CartContext = React.createContext({
  item:[],
  totalAmount:0,
  totalPrice:0,
  newCartDispatch:()=>{}
});

export default CartContext;
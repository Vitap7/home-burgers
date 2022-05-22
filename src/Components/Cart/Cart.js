import React, { useContext, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartContext from "../../Store/cartContext";
import CartDetails from "../CartDetails/CartDetails";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const ctx = useContext(CartContext);
  //详情显示
  const [showDetails, setShowDetails] = useState(false);
  //结账页面显示
  const [showCheckout, setShowCheckout] = useState(false);

  //在组件每次渲染时，检查商品数量，若为0则修改相应state为false
  //组件每次渲染，函数体都执行
  //注意useEffect中函数逻辑，否则仍会出现too many re-renders

  //默认情况下，useEffect中的函数在组建渲染完成后调用，
  //且每次渲染完成都会调用
  //第二个参数是useEffect的依赖（数组类型），只有依赖变化时，才会调用

  //通常会将useEffect中的所有局部变量都设置为依赖项，
  //确保这些值发生变化时触发Effect执行

  //如果依赖项设置为[]，则useEffect只会在初始化时执行

  useEffect(() => {
    // console.log('useEffect执行了！');
    if(ctx.totalAmount===0){
      setShowDetails(false);
      setShowCheckout(false);
    }
  },[ctx]);

  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((pre) => !pre);
  };

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) {
      return;
    }
    setShowCheckout(true);
  };

  const closeCheckoutHandler = () => {
    setShowCheckout(false);
  };

  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout ? <Checkout onClose={closeCheckoutHandler} /> : null}

      {showDetails ? <CartDetails /> : null}

      <div className={classes.Bag}>
        <img src={iconImg} alt=''></img>
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.Amount}>{ctx.totalAmount}</span>
        )}
      </div>

      {ctx.totalPrice === 0 ? (
        <p className={classes.ZeroPrice}>未选购商品</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}

      <button
        className={`${classes.Button} ${
          ctx.totalPrice === 0 ? classes.ButtonDisable : ""
        }`}
        onClick={showCheckoutHandler}
      >
        去结算
      </button>
    </div>
  );
};

export default Cart;

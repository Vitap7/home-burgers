import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../Store/cartContext";
import CheckoutItem from "./ChecloutItem/CheckoutItem";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
  const ctx = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className={classes.Checkout}>
      <div className={classes.Back}>
        <FontAwesomeIcon icon={faAngleLeft} onClick={props.onClose} />
      </div>

      <div className={classes.Content}>
        <header className={classes.Header}>
          <span className={classes.Title}>餐品详情</span>
        </header>
        <div className={classes.List}>
          {ctx.item.map((item) => (
            <CheckoutItem key={item.id} meal={item} />
          ))}
        </div>
        <footer>
          <span className={classes.TotalPrice}>{ctx.totalPrice}</span>
        </footer>
      </div>

      <div className={classes.BottomBar}>
        <span className={classes.Price}>{ctx.totalPrice}</span>
        <button>去支付</button>
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;

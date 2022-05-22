import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../Store/cartContext";
import Meal from "../Meals/Meal/Meal";
import Confirm from "../UI/Confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const clearCartHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const okHandler = () => {
    ctx.newCartDispatch({type:'Clear'});
  };

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          onCancel={cancelHandler}
          onOk={okHandler}
          confirmText={"确认清空购物车吗？😥"}
        />
      )}

      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <span className={classes.Title}>餐品详情</span>
          <div onClick={clearCartHandler}>
            <FontAwesomeIcon icon={faTrashCan} className={classes.Trash} />
            <span className={classes.Clear}>清空购物车</span>
          </div>
        </header>

        <div className={classes.CartList}>
          {ctx.item.map((item) => (
            <Meal key={item.id} meal={item} noDesc={true} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;

import React from "react";
import Counter from "../../UI/Counter/Counter";
import classes from "./CheckoutItem.module.css";

const CheckoutItem = (props) => {

  return (
    <div className={classes.Box}>
      <div className={classes.ImgBox}>
        <img src={props.meal.img} alt=""></img>
      </div>
      <div className={classes.DetailBox}>
        <span className={classes.Title}>{props.meal.title}</span>
        <div className={classes.NumBox}>
          <div className={classes.Amount}>
            <Counter meal={props.meal} />
          </div>
          <div className={classes.Price}>
            {props.meal.amount * props.meal.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;

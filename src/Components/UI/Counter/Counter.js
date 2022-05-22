import React, { useContext } from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../Store/cartContext";

//引入font awesome解决-难以居中问题
/*
 *  Step 1. 安装依赖
 *  Step 2. 引入组件
 *  Step 3. 引入图标
 *  Step 4. 使用组件
*/

const Counter = (props) => {

  const cartCtx = useContext(CartContext);

  const addButtonHandler = ()=>{
    cartCtx.newCartDispatch({type:'Add',meal:props.meal});
  }

  const subButtonHandler = ()=>{
    cartCtx.newCartDispatch({type:'Remove',meal:props.meal});
  }

  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button
          className={classes.Sub}
          onClick={subButtonHandler}
          ><FontAwesomeIcon icon={faMinus}/></button>
          <span className={classes.Count}>{props.meal.amount}</span>
        </>
      ) : null}

      <button
      className={classes.Add}
      onClick={addButtonHandler}
      ><FontAwesomeIcon icon={faPlus}/></button>
    </div>
  );
};

export default Counter;

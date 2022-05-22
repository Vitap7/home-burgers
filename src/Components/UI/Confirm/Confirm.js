import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Confirm.module.css";

const Confirm = (props) => {
  return (
    <Backdrop className={classes.Confirm} onClick={props.onCancel}>
      <div className={classes.Dialog}>
        <p className={classes.Desc}>{props.confirmText}</p>
        <div className={classes.ButtonArea}>
          <button
            onClick={(e) => {
              props.onCancel(e);
            }}
          >
            取消
          </button>
          <button
            className={classes.Ok}
            onClick={(e) => {
              props.onOk(e);
            }}
          >
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;

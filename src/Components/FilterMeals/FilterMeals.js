import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  //改进：实现数据双向绑定
  const [keyword, setKeyword] = useState("");

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value.trim());
    // const keyword = e.target.value.trim();
    // props.onFilter(keyword);
  };

  //deBounce
  //Effect的回调函数中，可以指定一个函数作为返回值
  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log('婷婷')
      props.onFilter(keyword);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputArea}>
        <input
          type="text"
          value={keyword}
          className={classes.Input}
          placeholder={"请输入关键字"}
          onChange={inputChangeHandler}
        ></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.Icon} />
      </div>
    </div>
  );
};

export default FilterMeals;

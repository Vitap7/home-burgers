import React, { useState, useReducer } from "react";
import Meals from "./Components/Meals/Meals";
import CartContext from "./Store/cartContext";
import FilterMeals from "./Components/FilterMeals/FilterMeals";
import Cart from "./Components/Cart/Cart";

//模拟食物数据
const MEALS_DATA = [
  {
    id: "1",
    title: "麦辣鸡腿堡",
    desc: "金黄脆辣的外皮，里面是鲜嫩幼滑的鸡腿肉，搭配清爽生菜和美味沙拉酱，多重滋味，一次打动您挑剔的味蕾。",
    price: 22,
    img: "/img/hams/1 (1).png",
  },
  {
    id: "2",
    title: "原味板烧鸡腿堡",
    desc: "原块去骨鸡排嫩滑多汁，加洋葱及胡椒调味，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富，煎制过程0油添加，绝对让人食指大动！",
    price: 22,
    img: "/img/hams/1 (2).png",
  },
  {
    id: "3",
    title: "双层深海鳕鱼堡",
    desc: "双层深海鳕鱼饼，鲜嫩美味，双重满足。",
    price: 24,
    img: "/img/hams/1 (3).png",
  },
  {
    id: "4",
    title: "汉堡包",
    desc: "百分百纯牛肉只以少许盐与胡椒调味配搭爽脆酸瓜洋葱粒与美味番茄醬经典滋味让你无法抵挡!",
    price: 12,
    img: "/img/hams/1 (4).png",
  },
  {
    id: "5",
    title: "麦香鸡",
    desc: "清脆爽口的生菜，给你植物纤维；金黄酥脆的鸡肉则来自精心培育的优质嫩鸡。营养配搭，让你多一个好滋味的健康选择。",
    price: 14,
    img: "/img/hams/1 (5).png",
  },
  {
    id: "6",
    title: "麦香鱼",
    desc: "由深海鳕鱼制成的鳕鱼饼，外皮炸得金黄酥脆，内里又保留了鱼肉的鲜嫩多汁。美味鱼肉与滋味沙拉酱配搭，风味独特。",
    price: 14,
    img: "/img/hams/1 (6).png",
  },
];

const cartReducer = (state, action) => {
  const newCart = { ...state };
  switch (action.type) {
    case "Add":
      if (newCart.item.indexOf(action.meal) === -1) {
        newCart.item.push(action.meal);
        action.meal.amount = 1;
      } else {
        action.meal.amount += 1;
      }
      newCart.totalAmount += 1;
      newCart.totalPrice += action.meal.price;
      return newCart;

    case "Remove":
      action.meal.amount -= 1;
      if (action.meal.amount === 0) {
        newCart.item.splice(newCart.item.indexOf(action.meal), 1);
      }
      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.meal.price;
      return newCart;

    case "Clear":
      newCart.item.forEach((item) => (item.amount = 0));
      newCart.item = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;

    default:
      return state;
  }
};

const App = () => {
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  const filterHandler = (keyword) => {
    const filterData = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
    setMealsData(filterData);
  };

  const [newCart, newCartDispatch] = useReducer(cartReducer, {
    item: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  return (
    <CartContext.Provider value={{ ...newCart, newCartDispatch }}>
      <div>
        <FilterMeals onFilter={filterHandler} />
        <Meals mealsData={mealsData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
};

export default App;

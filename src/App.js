import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [redBorder,setRedBorder] = useState(true);

  const clickHandler = ()=>{
    setRedBorder(pre=>!pre);
  }

  return (
    <div>
      <p className={`p1${redBorder?'':' blueBorder'}`}>I'm a paragraph.</p>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default App;
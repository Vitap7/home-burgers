import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//移动端适配
//所以此时视口宽度为 750rem
document.documentElement.style.fontSize = 100/750 +'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);

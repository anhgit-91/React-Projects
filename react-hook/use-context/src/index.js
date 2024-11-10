import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Theme from './basic/ThemeContext';
import Language from './basic/LanguageSwitcher';
import AuthenticationContext from './basic/UserAuthentication';
import ModalContext from './Intermediate/ModalContext';
import ShoppingCart from './Intermediate/ShoppingCart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Theme /> */}
    {/* { <Language /> } */}
    {/* <AuthenticationContext /> */}
    {/* <ModalContext /> */}
    <ShoppingCart />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

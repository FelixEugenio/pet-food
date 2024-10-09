import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignUp } from './pages/SignUp';
import { Checkout } from './pages/Checkout';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);



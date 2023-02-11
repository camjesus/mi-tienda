import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import CartProvider from './context/CartProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyDn8WahLRSxvBUI10xvi4xBdJ2yadWAqOs",
  authDomain: "tienda-66370.firebaseapp.com",
  projectId: "tienda-66370",
  storageBucket: "tienda-66370.appspot.com",
  messagingSenderId: "605277322327",
  appId: "1:605277322327:web:e5215ca35aed2ec4b0b712"
};
const app = initializeApp(firebaseConfig);
root.render(
  <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
);


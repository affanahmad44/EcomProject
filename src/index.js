import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/productcontex';
import { FilterContextProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);



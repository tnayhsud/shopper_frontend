import React, { useEffect } from 'react';
import './App.css';
import CartProvider from './context/CartProvider';
import WishlistProvider from './context/WishlistProvider';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RequireAuth from './components/auth/RequireAuth';
import Checkout from './components/checkout/Checkout';
import ProductDetail from './components/ProductDetail';
import AuthProvider from './context/AuthProvider';
import Orders from './components/orders/Orders';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ScrollToTop />
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<RequireAuth />}>
                <Route path="/" element={<Home />} >
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/product-details/:id" element={<ProductDetail />} />
                  <Route path="/orders" element={<Orders />} />
                </Route>
              </Route>
            </Routes>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

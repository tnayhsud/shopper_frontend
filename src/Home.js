import React from 'react';
import './App.css';
import NewsLetter from './components/static/NewsLetter';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import Main from './Main';
import Checkout from './components/checkout/Checkout';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Error from './components/static/Error';
import useMediaQuery from './hooks/useMediaQuery';
import Orders from './components/orders/Orders';

function Home() {
    const route = useLocation().pathname;
    const mobile = useMediaQuery('(max-width: 991px)');
    return (
        <React.Fragment>
            <Header />
            {mobile && <MobileMenu />}
            <Wishlist />
            <Cart />
            {route === "/" ? <Main />
                : (route.startsWith("/checkout")) ? <Checkout />
                    : (route.startsWith("/product-details")) ? <ProductDetail />
                        : (route.startsWith("/orders")) ? <Orders />
                            : <Error />
            }
            <NewsLetter />
            <Footer />
            <div id="scroll-to-top" className="scroll-to-top">
                <span className="material-icons-outlined">expand_less</span>
            </div>
        </React.Fragment>
    );
}

export default Home;

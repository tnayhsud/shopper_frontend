import React, { useContext, useEffect, useState } from 'react';
import '../../src/App.css'
import { men_wear, women_wear, beauty_brands } from '../MenuData';
import { CartContext } from '../context/CartProvider';
import { WishlistContext } from '../context/WishlistProvider';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

function Header() {
    const menu = [
        { "item": "Home", "value": [] },
        { "item": "Men", "value": men_wear },
        { "item": "Women", "value": women_wear },
        { "item": "Beauty", "value": beauty_brands },
        { "item": "Home & Living", "value": [] }
    ];
    const [cartItems, setCartItems] = useState({ "cartItems": [], "cartCount": 0 });
    const [wishlistItems, setWishlistItems] = useState({ "wishlistItems": [], "wsCount": 0 });

    const { data: userData, setData: setAuthData } = useContext(AuthContext);
    const { data: cartData } = useContext(CartContext);
    const { data: wishlistData } = useContext(WishlistContext);
    const [showUserProfile, setShowUserProfile] = useState(false);

    useEffect(() => {
        setCartItems(cartData);
    }, [cartData]);

    useEffect(() => {
        setWishlistItems(wishlistData);
    }, [wishlistData]);

    const logoutHandler = () => {
        setAuthData({
            "user": {},
            "loggedIn": false
        });
    };

    const showUserProfileMenu = () => {
        setShowUserProfile(!showUserProfile);
    }

    return (
        <header className="header-section pos-relative light-bg sticky-header d-none d-lg-block section-fluid-270">
            <div className="header-wrapper pos-relative">
                <div className="container-fluid">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div className="mobile-logo">
                                <Link to="/">
                                    <img width="136px" src={require("../img/logo192.png")} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <div className="header-event">
                                <div className="menu-event dropdown">
                                    <button className="main-menu-event dropdown-toggle" data-bs-toggle="dropdown">
                                        <img src={require("../img/icons/icon-open-menu.svg").default} alt="" />
                                        <span>Menu</span>
                                        <img src={require("../img/icons/icon-arrow-drop-down.svg").default} alt="" />
                                    </button>
                                    <ul className="mainmenu-nav dropdown-menu">
                                        {menu.map(val => {
                                            return <li className="menu-items" key={val.item}>
                                                <a href="/">{val.item}
                                                    {
                                                        val.value.length > 0 && <span className="material-icons">arrow_right</span>
                                                    }
                                                </a>
                                                <div className="has-dropdown megamenu">
                                                    {val.value.map(subVal => {
                                                        return <div className="menu-content" key={subVal.title}>
                                                            <h6 className="title">{subVal.title}</h6>
                                                            <ul className="submenu">
                                                                {subVal.types.map(type => {
                                                                    return <li key={type}><a href="/">{type}</a></li>
                                                                })}
                                                            </ul>
                                                        </div>
                                                    })}
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                                <div className="search-event">
                                    <input type="search" placeholder="Search..." className="header-search" />
                                    <button className="header-search-btn">
                                        <img src={require("../img/icons/icon-search.svg").default} alt="" />
                                    </button>
                                </div>
                                {/* menu ends  */}
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="header-action">
                                <button className="header-action-item header-action-wishlist" data-bs-toggle="offcanvas"
                                    data-bs-target="#wishlistOffcanvas">
                                    <img src={require("../img/icons/icon-heart-dark.svg").default} alt="" />
                                    <span className="count-tag">{wishlistItems.wsCount}</span>
                                </button>
                                <button className="header-action-item header-action-cart" data-bs-toggle="offcanvas"
                                    data-bs-target="#addcartOffcanvas">
                                    <img src={require("../img/icons/icon-shopping-bag-dark.svg").default} alt="" />
                                    <span className="count-tag item-count--light">{cartItems.cartCount}</span>
                                </button>
                                <div style={{ cursor: "pointer" }} className="header-action-item" onClick={showUserProfileMenu}>
                                    {!showUserProfile ?
                                        <img width="27px" src={require("../img/icons/icon-user-profile.svg").default} alt="" /> :
                                        <button className="btn-close" aria-label="Close"></button>
                                    }
                                    {
                                        showUserProfile && <div className="menu portal">
                                            <ul>
                                                <li><p style={{ fontSize: "20px" }}>{userData.user.name}</p></li>
                                                <li><Link to="/orders">Orders</Link></li>
                                                <li>
                                                    <button className="logout-btn header-action-item header-action-wishlist" onClick={logoutHandler}>Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                                {/* <button title="Logout" className="logout-btn header-action-item header-action-wishlist" onClick={logoutHandler}>
                                    <img width="24px" src={require("../img/icons/logout.png")} alt="" />
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
import React, { useContext, useEffect, useState } from "react";
import '../../src/App.css'
import $ from 'jquery';
import { men_wear, women_wear, beauty_brands } from '../MenuData';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function MobileMenu() {
    const menu = [
        { "item": "Home", "value": [] },
        { "item": "Men", "value": men_wear },
        { "item": "Women", "value": women_wear },
        { "item": "Beauty", "value": beauty_brands },
        { "item": "Home & Living", "value": [] }
    ];

    const { data: userData, setData: setAuthData } = useContext(AuthContext);
    const [showUserProfile, setShowUserProfile] = useState(false);

    useEffect(() => {
        mobileOffCanvasMenu();
    }, []);

    const logoutHandler = () => {
        setAuthData({
            "user": {},
            "loggedIn": false
        });
    };

    const showUserProfileMenu = () => {
        setShowUserProfile(!showUserProfile);
    }

    function mobileOffCanvasMenu() {
        var $offCanvasNav = $('.offcanvas-menu');
        var $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');
        $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');
        $offCanvasNav.off('click').on('click', 'li a, .offcanvas-menu-expand', function (e) {
            e.preventDefault();
            var $this = $(this);
            if ($this.attr('href') === '/' || $this.hasClass('offcanvas-menu-expand')) {
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
            return false;
        });
    }

    return (
        <>
            <div className="mobile-header d-block d-lg-none">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="mobile-logo">
                                <a href="/">
                                    <img width="136px" src={require("../img/logo192.png")} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="mobile-action-link text-end d-flex">
                                <button data-bs-toggle="offcanvas" data-bs-target="#toggleMenu">
                                    <span className="material-icons">menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="toggleMenu">
                <div className="offcanvas-header">
                    <button className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex justify-content-center">
                        <a href="/" className="header-action-item header-action-wishlist">
                            <img src={require("../img/icons/icon-heart-dark.svg").default} alt="" />
                            <span className="count-tag">0</span>
                        </a>
                        <a href="/" className="header-action-item header-action-cart">
                            <img src={require("../img/icons/icon-shopping-bag-dark.svg").default} alt="" />
                            <span className="count-tag">0</span>
                        </a>
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
                    </div>
                    <div className="header-event mobile-search my-5">
                        <div className="search-event">
                            <input type="search" className="header-search" />
                            <button className="header-search-btn">
                                <img src={require("../img/icons/icon-search.svg").default} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className="offcanvas-mobile-menu-wrapper">
                        <div className="mobile-menu-bottom">
                            <div className="offcanvas-menu">
                                <ul>
                                    {menu.map(val => {
                                        return <li key={val.item}>
                                            <a href="/">{val.item}</a>
                                            {val.value.map(subVal => {
                                                return <ul className="mobile-sub-menu" key={subVal.title}>
                                                    <li>
                                                        <a href="/"><span>{subVal.title}</span></a>
                                                        <ul className="mobile-sub-menu">
                                                            {subVal.types.map(type => {
                                                                return <li key={type}><a href="/">{type}</a></li>
                                                            })}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            })}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="mobile-contact-info text-center">
                            <div className="social-link">
                                <li>
                                    <a href="/">
                                        <img src={require("../img/icons/icon-facebook-f-dark.svg").default} alt="" className="icon-svg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src={require("../img/icons/icon-dribbble-dark.svg").default} alt="" className="icon-svg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src={require("../img/icons/icon-twitter-dark.svg").default} alt="" className="icon-svg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src={require("../img/icons/icon-pinterest-p-dark.svg").default} alt="" className="icon-svg" />
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
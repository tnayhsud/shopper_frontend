import React from 'react';
import '../../src/App.css'

function Footer() {
    return (
        <footer className="footer-section footer-section-style-1 section-top-gap-120">
            <div className="box-wrapper">
                <div className="footer-wrapper section-fluid-270">
                    <div className="container-fluid">

                        <div className="footer-top">
                            <div className="footer-top-left">
                                <div className="footer-contact-items">
                                    <a href="tel:+91-9898989898" className="icon-left">
                                        <img src={require("../img/icons/icon-ios-call-dark.svg").default} alt="" className="icon-svg" />
                                        989 9898 989
                                    </a>
                                    <a href="mailto:shopping@gmail.com" className="icon-left">
                                        <img src={require("../img/icons/icon-mail-open-dark.svg").default} alt="" className="icon-svg" />
                                        shopping@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="footer-top-right">
                                <div className="footer-social">
                                    <a href="/">
                                        <img src={require("../img/icons/icon-facebook-f-dark.svg")} alt="" className="icon-svg" />
                                    </a>
                                    <a href="/">
                                        <img src={require("../img/icons/icon-dribbble-dark.svg")} alt="" className="icon-svg" />
                                    </a>
                                    <a href="/">
                                        <img src={require("../img/icons/icon-pinterest-p-dark.svg")} alt="" className="icon-svg" />
                                    </a>
                                    <a href="/">
                                        <img src={require("../img/icons/icon-twitter-dark.svg")} alt="" className="icon-svg" />
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="footer-center">
                            <div className="footer-widgets-items">
                                <div className="footer-widgets-single-items footer-widgets-single-item--light">
                                    <h5 className="title">Product</h5>
                                    <h5 className="collapsed-title collapsed" data-bs-toggle="collapse"
                                        data-bs-target="/dividerId-1">Product</h5>
                                    <div className="widget-collapse-body collapse" id="dividerId-1">
                                        <ul className="footer-nav">
                                            <li><a href="/">Men</a></li>
                                            <li><a href="/">Women</a></li>
                                            <li><a href="/">Kids</a></li>
                                            <li><a href="/">Home&#38;Living</a></li>
                                            <li><a href="/">Beauty</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-widgets-single-items footer-widgets-single-item--light">
                                    <h5 className="title">Offer</h5>
                                    <h5 className="collapsed-title collapsed" data-bs-toggle="collapse"
                                        data-bs-target="/dividerId-2">Offer</h5>
                                    <div className="widget-collapse-body collapse" id="dividerId-2">
                                        <ul className="footer-nav">
                                            <li><a href="/">Gift Cards</a></li>
                                            <li><a href="/">Insider Points</a></li>
                                            <li><a href="/">Coupons</a></li>
                                            <li><a href="/">Birthday Special</a></li>
                                            <li><a href="/">Festive Season</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-widgets-single-items footer-widgets-single-item--light">
                                    <h5 className="title">Information</h5>
                                    <h5 className="collapsed-title collapsed" data-bs-toggle="collapse"
                                        data-bs-target="/dividerId-3">Information</h5>
                                    <div className="widget-collapse-body collapse" id="dividerId-3">
                                        <ul className="footer-nav">
                                            <li><a href="/">Contact Us</a></li>
                                            <li><a href="/">FAQ</a></li>
                                            <li><a href="/">T&#38;C</a></li>
                                            <li><a href="/">Terms of Use</a></li>
                                            <li><a href="/">Track Orders</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-widgets-single-items footer-widgets-single-item--light">
                                    <h5 className="title">Useful Links</h5>
                                    <h5 className="collapsed-title collapsed" data-bs-toggle="collapse"
                                        data-bs-target="/dividerId-4">Useful Links</h5>
                                    <div className="widget-collapse-body collapse" id="dividerId-4">
                                        <ul className="footer-nav">
                                            <li><a href="/">Shipping</a></li>
                                            <li><a href="/">Cancellation</a></li>
                                            <li><a href="/">Returns</a></li>
                                            <li><a href="/">Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <p className="copyright-text copyright-text--light">&copy; 2021. Made with <span
                                className="material-icons">favorite</span> by <a href="/">Techie Coder</a></p>
                            <a href="/" className="payment-logo">
                                <img src={require("../img/logo/payment-logo.png")} alt="" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
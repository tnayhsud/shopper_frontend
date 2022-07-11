import React, { useState } from 'react';
import '../../src/App.css';
import Products from './Products';
import Alert from "../components/static/Alert";

function ProductTab() {

    const [alert, setAlert] = useState({});

    return (
        <div id="product-swiper" className="product-tab-items-section section-fluid-270 section-top-gap-60">
            <div className="box-wrapper">
                <div className="section-wrapper">
                    <div className="container-fluid">
                        <div className="row justify-content-between align-items-center flex-wrap">
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-auto">
                                <div className="section-content section-content-gap-60">
                                    <h2 className="section-title">Products</h2>
                                    <p>All products are Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-tab-item-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <ul className="product-tab nav" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#all" type="button">
                                            All <img src={require("../img/product tab/viewall.png")} alt="" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#men" type="button">
                                            Men <img src={require("../img/product tab/man.png")} alt="" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#women" type="button">
                                            Women <img src={require("../img/product tab/woman.png")} alt="" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#kids" type="button">
                                            Kids <img src={require("../img/product tab/kids.png")} alt="" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#others" type="button">
                                            Others <img src={require("../img/product tab/others.png")} alt="" />
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane tab-animate show active" id="all" role="tabpanel">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="center-slider-nav product-slider-3grids-2rows">
                                                    <div className="swiper-container">
                                                        <div className="swiper-container">
                                                            <Products
                                                                type={"All"}
                                                                slidesPerView={4}
                                                                rows={2}
                                                                nextElClass=".center-slider-nav .button-next"
                                                                prevElClass=".center-slider-nav .button-prev"
                                                                showActionButtons={true}
                                                                setAlert={setAlert}>
                                                            </Products>
                                                            <div className="center-slider-nav-buttons slider-buttons">
                                                                <div className="slider-button button-prev">
                                                                    <span className="material-icons">arrow_left</span>
                                                                </div>
                                                                <div className="slider-button button-next">
                                                                    <span className="material-icons">arrow_right</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="center-slider-nav-buttons slider-buttons">
                                                            <div className="slider-button button-prev">
                                                                <span className="material-icons">arrow_left</span>
                                                            </div>
                                                            <div className="slider-button button-next">
                                                                <span className="material-icons">arrow_right</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane tab-animate" id="men" role="tabpanel">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="center-slider-nav product-slider-3grids-2rows">
                                                    <div className="swiper-container">
                                                        <Products
                                                            type={"MEN"}
                                                            slidesPerView={4}
                                                            rows={2}
                                                            nextElClass=".center-slider-nav .button-next"
                                                            prevElClass=".center-slider-nav .button-prev"
                                                            showActionButtons={true}
                                                            setAlert={setAlert}>
                                                        </Products>
                                                        <div className="center-slider-nav-buttons slider-buttons">
                                                            <div className="slider-button button-prev">
                                                                <span className="material-icons">arrow_left</span>
                                                            </div>
                                                            <div className="slider-button button-next">
                                                                <span className="material-icons">arrow_right</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane tab-animate" id="women" role="tabpanel">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="center-slider-nav product-slider-3grids-2rows">
                                                    <div className="swiper-container">
                                                        <Products
                                                            type={"WOMEN"}
                                                            slidesPerView={4}
                                                            rows={2}
                                                            nextElClass=".center-slider-nav .button-next"
                                                            prevElClass=".center-slider-nav .button-prev"
                                                            showActionButtons={true}
                                                            setAlert={setAlert}>
                                                        </Products>
                                                        <div className="center-slider-nav-buttons slider-buttons">
                                                            <div className="slider-button button-prev">
                                                                <span className="material-icons">arrow_left</span>
                                                            </div>
                                                            <div className="slider-button button-next">
                                                                <span className="material-icons">arrow_right</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane tab-animate" id="kids" role="tabpanel">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="center-slider-nav product-slider-3grids-2rows">
                                                    <div className="swiper-container">
                                                        <Products
                                                            type={"KIDS"}
                                                            slidesPerView={4}
                                                            rows={2}
                                                            nextElClass=".center-slider-nav .button-next"
                                                            prevElClass=".center-slider-nav .button-prev"
                                                            showActionButtons={true}
                                                            setAlert={setAlert}>
                                                        </Products>
                                                        <div className="center-slider-nav-buttons slider-buttons">
                                                            <div className="slider-button button-prev">
                                                                <span className="material-icons">arrow_left</span>
                                                            </div>
                                                            <div className="slider-button button-next">
                                                                <span className="material-icons">arrow_right</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane tab-animate" id="others" role="tabpanel">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="center-slider-nav product-slider-3grids-2rows">
                                                    <div className="swiper-container">
                                                        <Products
                                                            type={"OTHER"}
                                                            slidesPerView={4}
                                                            rows={2}
                                                            nextElClass=".center-slider-nav .button-next"
                                                            prevElClass=".center-slider-nav .button-prev"
                                                            showActionButtons={true}
                                                            setAlert={setAlert}>
                                                        </Products>
                                                        <div className="center-slider-nav-buttons slider-buttons">
                                                            <div className="slider-button button-prev">
                                                                <span className="material-icons">arrow_left</span>
                                                            </div>
                                                            <div className="slider-button button-next">
                                                                <span className="material-icons">arrow_right</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="/" className="btn btn-md btn-default btn-section-bottom">View All Product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Alert alert={alert} setShow={setAlert}></Alert>
        </div>
    );
}

export default ProductTab;
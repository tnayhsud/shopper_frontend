import React, { useState } from 'react';
import '../../src/App.css'
import Products from './Products';
import Alert from './static/Alert';

function ProductItems() {

    const [alert, setAlert] = useState({});

    return (
        <div className="product-item-section section-fluid-270 section-top-gap-60">
            <div className="box-wrapper">
                <div className="section-wrapper">
                    <div className="container-fluid">
                        <div className="row justify-content-between align-items-center flex-wrap section-content-gap-60">
                            <div className="col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-auto me-5">
                                <div className="section-content">
                                    <h2 className="section-title">Exclusive Collection</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, praesentium!</p>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="top-slider-buttons">
                                    <div className="slider-buttons">
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
                <div className="product-item-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="product-slider-3grids-1row">
                                    <div className="swiper-container">
                                        <Products
                                            type={"All"}
                                            slidesPerView={4}
                                            rows={1}
                                            nextElClass=".top-slider-buttons .button-next"
                                            prevElClass=".top-slider-buttons .button-prev"
                                            showActionButtons={true}
                                            setAlert={setAlert}>
                                        </Products>
                                    </div>
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

export default ProductItems;
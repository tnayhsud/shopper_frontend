import React from 'react';

function BannerCard() {
    return (
        <div className="banner-card-section section-fluid-270 section-top-gap-60">
            <div className="box-wrapper">
                <div className="banner-card-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-20">
                                <div className="banner-card-single-item banner-animate--flash">
                                    <div className="image img-responsive">
                                        <img src={require("../../img/banner/banner1.jpg")} width="435" height="308" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="tag">Up to 30% off</p>
                                        <h4 className="title">Best Perfume</h4>
                                        <a href="/" className="text-link dark">SHOP NOW</a>
                                    </div>
                                    <span className="banner-cad-note">
                                        This is Lorem ipsum.
                                    </span>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 mb-20">
                                <div className="banner-card-single-item banner-animate--flash">
                                    <div className="image img-responsive">
                                        <img src={require("../../img/banner/banner2.jpg")} width="435" height="308" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="tag"><span className="white">30% OFF</span></p>
                                        <h4 className="title">Premium <span className="white">Jewellery</span></h4>
                                        <a href="/" className="text-link white">SHOP NOW</a>
                                    </div>
                                    <span className="banner-cad-note text-white">
                                        This is Lorem ipsum.
                                    </span>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 mb-20">
                                <div className="banner-card-single-item banner-animate--flash">
                                    <div className="image img-responsive">
                                        <img src={require("../../img/banner/banner3.jpg")} width="435" height="308" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="tag"><span className="white">10% off</span></p>
                                        <h4 className="title">Luxury Watch</h4>
                                        <a href="/" className="text-link white">SHOP NOW</a>
                                    </div>
                                    <span className="banner-cad-note text-danger">
                                        This is Lorem ipsum.
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerCard;
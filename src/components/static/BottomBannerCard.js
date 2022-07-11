import React from 'react';

function BottomBannerCard() {
    return (
        <div className="banner-card-section section-fluid-270 section-top-gap-60">
            <div className="box-wrapper">
                <div className="banner-car-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <a href="/" className="d-block banner-animate--wave">
                                    <img src={require("../../img/banner/banner.webp")} width="1355" height="350" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomBannerCard;
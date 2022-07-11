
import React from 'react';

function ShippingSection() {
    return (
        <div className="shipping-section section-fluid-270 section-top-gap-60">
            <div className="box-wrapper">
                <div className="shipping-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="row justify-content-between mb-n40">
                                <div className="col-xl-4 col-md-6 col-12 mb-40">

                                    <div className="ship-single">
                                        <div className="icon">
                                            <img src={require("../../img/shipping/fast delivery.png")} width="46" height="33" alt=""
                                                className="img-fluid" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Fast Delivery</h4>
                                            <p>This is lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4 col-md-6 col-12 mb-40">

                                    <div className="ship-single">
                                        <div className="icon">
                                            <img src={require("../../img/shipping/refund.png")} width="46" height="33" alt=""
                                                className="img-fluid" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">100% Refund</h4>
                                            <p>This is lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4 col-md-6 col-12 mb-40">

                                    <div className="ship-single">
                                        <div className="icon">
                                            <img src={require("../../img/shipping/24x7.png")} width="46" height="33" alt=""
                                                className="img-fluid" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">24 X 7 Customer Care</h4>
                                            <p>This is lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShippingSection;
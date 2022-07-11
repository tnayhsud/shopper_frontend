import React from 'react';

function NewsLetterSection() {
    return (
        <div className="newsletter-section section-fluid-270 section-top-gap-60">
            <div className="box-wrapper">
                <div className="newsletter-wrapper">
                    <div className="container-fluid">
                        <div className="col-12">
                            <div className="newsletter-area newsletter-area-style-1">
                                <div className="content content-left">
                                    <h4 className="title">Newsletter</h4>
                                    <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                                        voluptate.
                                    </p>
                                    <div className="newsletter-form">
                                        <input type="email" placeholder="Enter yourr email" required />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                    <div className="image-shape image-shape-left">
                                        <img src={require("../../img/icons/newsletter-paper-plane.svg").default} width="119" height="74" alt=""
                                            className="img-fluid" />
                                    </div>
                                </div>
                                <div className="content content-right">
                                    <h4 className="title">Download App</h4>
                                    <p>This is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
                                        inventore.
                                    </p>
                                    <div className="apps-btn">
                                        <a href="/"><img src={require("../../img/icons/iphone-app-button.png")} width="128" height="45"
                                            alt="" className="img-fluid" /></a>
                                        <a href="/"><img src={require("../../img/icons/googleplay-app-button.png")} width="128" height="45"
                                            alt="" className="img-fluid" /></a>
                                    </div>
                                    <div className="image-shape image-shape-right">
                                        <img src={require("../../img/icons/newsletter-cloud-computing.svg").default} width="94" height="81" alt=""
                                            className="img-fluid" />
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

export default NewsLetterSection;
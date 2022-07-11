import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";


function Companies() {
    return (
        <div className="company-logo-section section-fluid-270 section-top-gap-60">
            <div className="box-wrapper">
                <div className="company-logo-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="company-slider company-slider-bg">
                                    <div className="swiper-container">
                                        <Swiper
                                            slidesPerView={5}
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            modules={[Autoplay]}
                                        >
                                            <SwiperSlide>
                                                <a href="/" className="company-slider-single-item">
                                                    <div className="image">
                                                        <img src={require("../../img/logo/l1.png")} alt="" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <a href="/" className="company-slider-single-item">
                                                    <div className="image">
                                                        <img src={require("../../img/logo/l2.png")} alt="" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <a href="/" className="company-slider-single-item">
                                                    <div className="image">
                                                        <img src={require("../../img/logo/l3.png")} alt="" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <a href="/" className="company-slider-single-item">
                                                    <div className="image">
                                                        <img src={require("../../img/logo/l4.png")} alt="" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <a href="/" className="company-slider-single-item">
                                                    <div className="image">
                                                        <img src={require("../../img/logo/l5.png")} alt="" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Companies;

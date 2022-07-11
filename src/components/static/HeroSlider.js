import React from 'react';
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HashLink } from 'react-router-hash-link';
SwiperCore.use([Pagination]);

function HeroSlider() {
    const pagination = {
        clickable: true,
        el: '.swiper-pagination'
    };
    return (
        <div className="hero-slider-section hero-slider-light section-fluid-270">
            <div className="box-wrapper">
                <div className="hero-slider-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-slider">
                                    <div className="swiper-container">
                                        <Swiper
                                            slidesPerView={1}
                                            loop={true}
                                            autoplay={{
                                                delay: 5000,
                                                disableOnInteraction: false,
                                            }}
                                            effect="fade"
                                            modules={[Autoplay, Pagination, EffectFade]}
                                            pagination={pagination}
                                        >
                                            <SwiperSlide className="hero-sin-slider hero-bg">
                                                <div className="image">
                                                    <img src={require("../../img/slider/slider1.png")} width="500" height="600" alt="" />
                                                </div>
                                                <div className="image-shape"></div>
                                                <div className="content-box">
                                                    <div className="row">
                                                        <div
                                                            className="col-xl-5 offset-xl-1 col-lg-5 col-md-8 offset-md-1 col-10">
                                                            <div className="content">
                                                                <span className="title-tag">50% - 80% OFF</span>
                                                                <h2 className="title">Tops Collection</h2>
                                                                <p>This is Lorem ipsum, dolor sit amet consectetur
                                                                    adipisicing elit. A, doloribus? Dignissimos,
                                                                    perferendis? Nostrum enim expedita consectetur eos
                                                                    mollitia adipisci, doloremque, distinctio et ad quia
                                                                    dolorum!</p>
                                                                <HashLink to="/#product-swiper" className="btn btn-lg btn-default">SHOP NOW</HashLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hero-slider-shape hero-slider-top-shape">
                                                    <img src={require("../../img/icons/hero-slider-top-shape.svg").default} width="113" height="107"
                                                        className="img-fluid" alt="" />
                                                </div>
                                                <div className="hero-slider-shape hero-slider-bottom-shape">
                                                    <img src={require("../../img/icons/hero-slider-bottom-shape.svg").default} width="221"
                                                        height="234" alt="" className="img-fluid" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="hero-sin-slider hero-bg">
                                                <div className="image">
                                                    <img src={require("../../img/slider/slider2.png")} width="500" height="600" alt="" />
                                                </div>
                                                <div className="image-shape"></div>
                                                <div className="content-box">
                                                    <div className="row">
                                                        <div
                                                            className="col-xl-5 offset-xl-1 col-lg-5 col-md-8 offset-md-1 col-10">
                                                            <div className="content">
                                                                <span className="title-tag">UPTO 40% OFF</span>
                                                                <h2 className="title">Ethnic Dresses</h2>
                                                                <p>This is Lorem ipsum, dolor sit amet consectetur
                                                                    adipisicing elit. A, doloribus? Dignissimos,
                                                                    perferendis? Nostrum enim expedita consectetur eos
                                                                    mollitia adipisci, doloremque, distinctio et ad quia
                                                                    dolorum!</p>
                                                                <HashLink to="/#product-swiper" className="btn btn-lg btn-default">SHOP NOW</HashLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hero-slider-shape hero-slider-top-shape">
                                                    <img src={require("../../img/icons/hero-slider-top-shape.svg").default} width="113" height="107"
                                                        className="img-fluid" alt="" />
                                                </div>
                                                <div className="hero-slider-shape hero-slider-bottom-shape">
                                                    <img src={require("../../img/icons/hero-slider-bottom-shape.svg").default} width="221"
                                                        height="234" alt="" className="img-fluid" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="hero-sin-slider hero-bg">
                                                <div className="image">
                                                    <img src={require("../../img/slider/slider3.png")} width="500" height="600" alt="" />
                                                </div>
                                                <div className="image-shape"></div>
                                                <div className="content-box">
                                                    <div className="row">
                                                        <div
                                                            className="col-xl-5 offset-xl-1 col-lg-5 col-md-8 offset-md-1 col-10">
                                                            <div className="content">
                                                                <span className="title-tag">FLAT 30% OFF</span>
                                                                <h2 className="title">Black Tops</h2>
                                                                <p>This is Lorem ipsum, dolor sit amet consectetur
                                                                    adipisicing elit. A, doloribus? Dignissimos,
                                                                    perferendis? Nostrum enim expedita consectetur eos
                                                                    mollitia adipisci, doloremque, distinctio et ad quia
                                                                    dolorum!</p>
                                                                <HashLink to="/#product-swiper" className="btn btn-lg btn-default">SHOP NOW</HashLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hero-slider-shape hero-slider-top-shape">
                                                    <img src={require("../../img/icons/hero-slider-top-shape.svg").default} width="113" height="107"
                                                        className="img-fluid" alt="" />
                                                </div>
                                                <div className="hero-slider-shape hero-slider-bottom-shape">
                                                    <img src={require("../../img/icons/hero-slider-bottom-shape.svg").default} width="221"
                                                        height="234" alt="" className="img-fluid" />
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="swiper-pagination"></div>
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

export default HeroSlider;
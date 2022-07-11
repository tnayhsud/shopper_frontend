import React, { useContext, useEffect, useState } from 'react';
import '../../src/App.css'
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductService from '../service/ProductService';
import CartService from '../service/CartService';
import WishlistService from '../service/WishlistService';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import { WishlistContext } from '../context/WishlistProvider';
SwiperCore.use([Navigation]);

function Products(props) {
    const { setData: setCartData } = useContext(CartContext);
    const { setData: setWishlistData } = useContext(WishlistContext);
    const type = props.type;
    const [data, setData] = useState({
        isLoaded: false,
        items: null,
        error: null
    });

    useEffect(() => {
        getProducts(type);
    }, [type]);

    function getProducts(type) {
        ProductService.getProducts(type).then(res => {
            setData({ isLoaded: true, items: res.data, error: null });
        }).catch(error => {
            setData({ isLoaded: true, items: null, error: error });
            throw error;
        });
    }

    return (
        <Swiper
            slidesPerView={props.slidesPerView}
            spaceBetween={25}
            grid={{
                rows: props.rows
            }}
            modules={[Autoplay]}
            navigation={{
                nextEl: props.nextElClass,
                prevEl: props.prevElClass
            }}
        >
            {data && data.items && data.items.map((product, i) => {
                return <SwiperSlide className="product-single-item-style-1" key={product.title.concat(i)}>
                    <div className="image img-responsive">
                        <Link to={`/product-details/${product.id}`}>
                            <img src={product.imgUrl} alt="" className="img-fluid" />
                        </Link>
                        {product.discount > 0 && <ul className="tooltip-tag-items">
                            <li className="color-green">{product.discount}%</li>
                        </ul>}
                    </div>
                    <div className="content">
                        <div className="top">
                            <span className="category">{product.gender}</span>
                            <h4 className="title">
                                <Link to={`/product-details/${product.id}`}>
                                    {product.title}
                                </Link>
                            </h4>
                            <span className="price">₹ {product.discountPrice}
                                {product.discount > 0 && <del>₹ {product.actualPrice}</del>}
                            </span>
                        </div>
                        {props.showActionButtons && <div className="bottom">
                            <ul className="review-star">
                                <li className="fill">
                                    <span className="material-icons">star</span>
                                </li>
                                <li className="fill">
                                    <span className="material-icons">star</span>
                                </li>
                                <li className="fill">
                                    <span className="material-icons">star</span>
                                </li>
                                <li className="fill">
                                    <span className="material-icons">star</span>
                                </li>
                                <li className="fill">
                                    <span className="material-icons">star_half</span>
                                </li>
                            </ul>
                            <div className="product-event-items">
                                <button className="btn cart-btn" >
                                    <span className="material-icons" onClick={() => {
                                        CartService.invokeCartUpdateAction(product.id, 1, setCartData, props.setAlert, "Item added to cart.")
                                    }
                                    }>shopping_cart_border</span>
                                </button>
                                <button className="btn wishlist-btn">
                                    <span className="material-icons" onClick={() => {
                                        WishlistService.invokeWishlistUpdateAction(product.id, 1, setWishlistData, props.setAlert, "Item added to wishlist.")
                                    }}>favorite_border</span>
                                </button>
                            </div>
                        </div>}
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    );
}

export default Products;

import React, { useContext, useEffect, useState } from "react";
import "../App.css"
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Counter from "./Counter";
import Select from "react-select";
import { useParams } from "react-router-dom";
import ProductService from "../service/ProductService";
import CartService from "../service/CartService";
import WishlistService from "../service/WishlistService";
import { CartContext } from "../context/CartProvider";
import { WishlistContext } from "../context/WishlistProvider";
import Alert from "./static/Alert";
SwiperCore.use([Pagination]);

function ProductDetail() {
    const params = useParams();
    const [alert, setAlert] = useState({});
    const [product, setProduct] = useState({});
    const [itemCount, setItemCount] = useState(1);
    const { setData: setCartData } = useContext(CartContext);
    const { setData: setWishlistData } = useContext(WishlistContext);

    useEffect(() => {
        ProductService.getProduct(params.id).then(res => {
            setProduct(res.data);
        }).catch(error => {
            setProduct({});
            throw error;
        });
    }, [params.id]);

    const options = [
        { value: 'S', label: 'Small' },
        { value: 'M', label: 'Medium' },
        { value: 'L', label: 'Large' },
        { value: 'XL', label: 'Xtra Large' }
    ]

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'white' : 'blue',
            padding: 8,
            fontSize: "14px"
        }),
        singleValue: (provided, state) => {
            const fontSize = "14px";
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, fontSize, opacity, transition };
        }
    }

    return (
        <div className="product-gallery-info-section section-fluid-270" style={{ marginTop: "32px" }}>
            <div className="box-wrapper">
                <div className="container-fluid">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-xl-3 col-lg-3">
                            <div className="siderbar-section">
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title title-border">Categories</h6>
                                    <div className="sidebar-content">
                                        <div className="filter-type-select">
                                            <ul>
                                                <li>
                                                    <label className="checkbox-default" htmlFor="men">
                                                        <input type="checkbox" id="men" />
                                                        <span>Men</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" htmlFor="women">
                                                        <input type="checkbox" id="women" />
                                                        <span>Women</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" htmlFor="kid">
                                                        <input type="checkbox" id="kid" />
                                                        <span>Kid</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" htmlFor="fashion">
                                                        <input type="checkbox" id="fashion" />
                                                        <span>Fashion</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" htmlFor="new-arrival">
                                                        <input type="checkbox" id="new-arrival" />
                                                        <span>New Arrival</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-single-widget btn-section-bottom">
                                        <h6 className="sidebar-title title-border">Color</h6>
                                        <div className="sidebar-content">
                                            <div className="filter-type-select">
                                                <ul>
                                                    <li>
                                                        <label className="checkbox-default" htmlFor="red">
                                                            <input type="checkbox" id="red" />
                                                            <span>Red</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkbox-default" htmlFor="green">
                                                            <input type="checkbox" id="green" />
                                                            <span>Green</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkbox-default" htmlFor="blue">
                                                            <input type="checkbox" id="blue" />
                                                            <span>Blue</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkbox-default" htmlFor="black">
                                                            <input type="checkbox" id="black" />
                                                            <span>Black</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkbox-default" htmlFor="pink">
                                                            <input type="checkbox" id="pink" />
                                                            <span>Pink</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="sidebar-single-widget">
                                            <h6 className="sidebar-title title-border btn-section-bottom">Filter By Price</h6>
                                            <div className="sidebar-content">
                                                <input type="text" className="js-range-slider" name="my_range"
                                                    data-type="double" data-min="0" data-max="7000" data-from="500"
                                                    data-to="5000" />
                                            </div>

                                            <div className="sidebar-single-widget">
                                                <h6 className="sidebar-title title-border btn-section-bottom">Material</h6>
                                                <div className="sidebar-content">
                                                    <div className="filter-type-select">
                                                        <ul>
                                                            <li>
                                                                <label className="checkbox-default" htmlFor="fabric">
                                                                    <input type="checkbox" id="fabric" />
                                                                    <span>Fabric</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="checkbox-default" htmlFor="wood">
                                                                    <input type="checkbox" id="wood" />
                                                                    <span>Wood</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="checkbox-default" htmlFor="cotton">
                                                                    <input type="checkbox" id="cotton" />
                                                                    <span>Cotton</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="sidebar-single-widget btn-section-bottom">
                                                    <div className="sidebar-single-widget">
                                                        <h6 className="sidebar-title title-border">Tags</h6>
                                                        <div className="sidebar-content">
                                                            <ul className="tag-link">
                                                                <li><button className="btn">#Watches</button></li>
                                                                <li><button className="btn">#Perfume</button></li>
                                                                <li><button className="btn">#Grooming</button></li>
                                                                <li><button className="btn">#Toys</button></li>
                                                                <li><button className="btn">#Clothes</button></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="row">
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="product-gallery product-gallery--style-thumbnail-bottom">
                                        <div className="row flex-column-reverse">
                                            <div className="col-md-12">
                                                <div className="product-thumbnail-image">
                                                    <Swiper
                                                        slidesPerView={1}
                                                        pagination={true}
                                                        modules={[Autoplay, Pagination]}
                                                    >
                                                        <SwiperSlide className="rounded">
                                                            <img src={product.imgUrl} alt="" />
                                                        </SwiperSlide>
                                                        <SwiperSlide className="rounded">
                                                            <img src={product.imgUrl} alt="" />
                                                        </SwiperSlide >
                                                        <SwiperSlide className="rounded">
                                                            <img src={product.imgUrl} alt="" />
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="product-content">
                                        <p className="catagory">{product.gender}</p>
                                        <h2 className="title">{product.title}</h2>
                                        <span className="author">Slim Fit Formal 2-Piece Suit</span>
                                        <div className="bottom">
                                            <ul className="review-star">
                                                <li className="fill"><span className="material-icons">star</span></li>
                                                <li className="fill"><span className="material-icons">star</span></li>
                                                <li className="fill"><span className="material-icons">star</span></li>
                                                <li className="fill"><span className="material-icons">star</span></li>
                                                <li className="fill"><span className="material-icons">star_half</span></li>
                                            </ul>
                                        </div>

                                        <span className="price">₹ {product.discountPrice} {product.discount > 0 && <del>₹ {product.actualPrice}</del>}</span>

                                        <div className="product-variables">
                                            <div className="product-variable-color">
                                                <div className="color-select">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="color" id="color-red" />
                                                        <label className="form-check-label" htmlFor="color-red">
                                                            Red
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="color" id="color-green" />
                                                        <label className="form-check-label" htmlFor="color-green">
                                                            Green
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="color" id="color-blue" />
                                                        <label className="form-check-label" htmlFor="color-blue">
                                                            Blue
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="color" id="color-black" />
                                                        <label className="form-check-label" htmlFor="color-black">
                                                            Black
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="variable-items" style={{ flexDirection: "column" }}>
                                                <div className="variable-single-items type-select" style={{ width: "37%" }}>
                                                    <Select
                                                        defaultValue={{ label: "Medium", value: "M" }}
                                                        options={options} styles={customStyles}
                                                    />
                                                </div>
                                                <div style={{ width: "37%", marginTop: 8 }}>
                                                    <Counter item={product} updateCount={setItemCount}></Counter>
                                                </div>
                                                <div className="variable-single-items" style={{ marginTop: 32 }}>
                                                    <button className="btn btn-sm btn-primary" style={{ boxShadow: "4px 8px 24px #0d6efd" }}>Buy now</button>
                                                    <button className="btn btn-sm btn-default" style={{ marginLeft: 16 }}
                                                        onClick={() => CartService.invokeCartUpdateAction(product.id, itemCount, setCartData, setAlert, "Item added to cart.")}>Add To Cart</button>
                                                </div>
                                                <div className="variable-single-items" style={{ marginTop: 16 }}>
                                                    <button className="btn btn-sm border"
                                                        onClick={e => WishlistService.invokeWishlistUpdateAction(product.id, itemCount, setWishlistData, setAlert, "Item added to wishlist.")}>Add To Wishlist</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="product-description-content" style={{ marginTop: "24px" }}>
                                        <h6 className="title">Product Information</h6>
                                        <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                            quibusdam animi aliquid corporis nulla assumenda, eveniet amet, ipsam eos,
                                            autem magni nihil? Quas corporis possimus qui dolores dicta aliquam enim.
                                        </p>

                                        <p>Navy Blue Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                                            facilis in cum dicta sit voluptates libero, id quod, atque aliquam esse
                                            placeat velit distinctio labore!</p>

                                        <ul className="items-info-list">
                                            <li>Ut facilis in cum dicta sit voluptates libero id quod.</li>
                                            <li>Slim Fit Lorem ipsum dolor sit amet.</li>
                                            <li>Formal Lorem ipsum dolor sit nulla assumenda dolor.</li>
                                            <li>Pure wool Lorem ipsum dolor sit amet.</li>
                                        </ul>
                                        <p>Product Code :  {product.gender}{product.id}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Alert alert={alert} setShow={setAlert}></Alert>
        </div>
    )
};

export default ProductDetail;
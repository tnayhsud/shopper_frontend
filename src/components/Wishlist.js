import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'
import { WishlistContext } from '../context/WishlistProvider';
import WishlistService from '../service/WishlistService';
import Counter from './Counter';
import Alert from './static/Alert';

function Wishlist() {
    const { data, setData } = useContext(WishlistContext);
    const [alert, setAlert] = useState({});

    const updateWishlist = (item, quantity, message) => {
        WishlistService.invokeWishlistUpdateAction(item.productId, quantity, setData, setAlert, message ? message : "Item count updated in wishlist.");
    }

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="wishlistOffcanvas">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Wishlist</h5>
                <button className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="offcanvas-products-list wishlist">
                    {data.wishlistItems && data.wishlistItems.length > 0 ? data.wishlistItems.map(item => {
                        return <li className="single-item" key={item.id}>
                            <div className="box">
                                <Link to={`/product-details/${item.pid}`} className="image">
                                    <img src={item.product.imgUrl} alt="" />
                                </Link>
                                <div className="content">
                                    <p className="title">{item.product.title}</p>
                                    <div>
                                        <span>{item.quantity} x </span>
                                        <span>Rs. {item.product.discountPrice}</span>
                                    </div>
                                    <Counter item={item} updateQuantity={updateWishlist}></Counter>
                                </div>
                            </div>
                            <div className="item-delete text-right">
                                <button onClick={e => updateWishlist(item, 0, "Item removed from wishlist.")}><img data-pid={item.pid} src={require("../img/icons/icon-trash.svg").default} alt="" /></button>
                            </div>
                        </li>
                    }) : <span>No items added</span>}
                </ul>
                <div className="offcanvas-action-link">
                    <Link to={data.wishlistItems.length ? "/" : "#"}>
                        <button className="w-100 btn" disabled={data.wishlistItems.length === 0}>View Wishlist</button>
                    </Link>
                </div>
            </div>
            <Alert alert={alert} setShow={setAlert}></Alert>
        </div>
    );
}

export default Wishlist;
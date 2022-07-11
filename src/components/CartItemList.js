import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import CartService from "../service/CartService";
import Counter from "./Counter";
import Alert from "./static/Alert";

function CartItemList(props) {

    const { setData } = useContext(CartContext);
    const [alert, setAlert] = useState({});

    const updateCart = (item, quantity, message) => {
        CartService.invokeCartUpdateAction(item.productId, quantity, setData, setAlert, message ? message : "Item count updated in cart.");
    };

    return (
        <ul className="offcanvas-products-list">
            {props.data.cartItems && props.data.cartItems.length > 0 ? props.data.cartItems.map(item => {
                return <li className="single-item" key={item.id}>
                    <div className="box">
                        <Link to={`/product-details/${item.productId}`} className="image">
                            <img src={item.product.imgUrl} alt="" />
                        </Link>
                        <div className="content">
                            <p className="title">{item.product.title}</p>
                            <div>
                                <span>{item.quantity} x </span>
                                <span>Rs. {item.product.discountPrice}</span>
                            </div>
                            <Counter item={item} updateQuantity={updateCart}></Counter>
                        </div>
                    </div>
                    <div className="item-delete text-right">
                        <button onClick={() => updateCart(item, 0, "Item removed from cart.")}><img src={require("../img/icons/icon-trash.svg").default} alt="" /></button>
                    </div>
                </li>
            }) : <span>No items added</span>}
            <Alert alert={alert} setShow={setAlert}></Alert>
        </ul>
    )
};

export default CartItemList;
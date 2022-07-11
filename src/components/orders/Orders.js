import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import OrderService from "../../service/OrderService";
import Products from "../Products";
import Moment from 'react-moment';
import { Link } from "react-router-dom";

function Orders() {
    const [orders, setOrders] = useState([]);
    const { data: userData } = useContext(AuthContext);

    useEffect(() => {
        OrderService.getOrders(userData.user).then(res => {
            setOrders(res.data.data);
            console.log(res.data.data)
        }).catch(() => {
            console.log("Failed to fetch orders");
        })
    }, [userData.user]);

    return (
        <div className="section-fluid-270">
            <div className="box-wrapper">
                <div className="container-fluid" style={{ marginTop: "16px" }}>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <h3 className="pb-2 border-bottom"><b>Your Orders</b></h3>
                            <ul className="offcanvas-products-list">
                                {orders && orders.length > 0 ? orders.map((order, index, row) => {
                                    return <li className="single-item" key={`order-${index}`}>
                                        <ul className={index + 1 !== row.length ? "offcanvas-products-list border-bottom" : "offcanvas-products-list"}
                                            style={{ padding: "16px", width: "100%" }} >
                                            <li className="single-item" style={{ fontSize: "16px" }}>
                                                <b>Order Number: {order.id}</b>
                                                <p><small>Ordered : <Moment format="DD MMM YYYY">{order.createdAt}</Moment></small></p>
                                            </li>
                                            {order.orderItems.map((item, itemId) => {
                                                return <li style={{ paddingLeft: "16px" }} className="single-item" key={`order${itemId}`}>
                                                    <div className="box">
                                                        <Link to={`/product-details/${item.productId}`} className="image">
                                                            <img src={item.product.imgUrl} alt="" />
                                                        </Link>
                                                        <div className="content">
                                                            <p className="title">{item.product.title}</p>
                                                            <div>
                                                                <span>Rs. {item.product.price}</span>
                                                            </div>
                                                            <div>
                                                                <span>Quantity : </span>
                                                                <span>{item.quantity}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            })}
                                        </ul>
                                    </li>
                                }) : <span>No orders found</span>}
                            </ul>
                        </div>
                        <div className="col-xl-1 col-lg-1">
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <h4><b>Check these recommendations</b></h4>
                            <p style={{ fontSize: "14px" }}>Best recommendations matching your style...</p>
                            <Products
                                type={"All"}
                                rows={3}
                                slidesPerView={2.5}
                                nextElClass="" prevElClass=""
                                showActionButtons={false}></Products>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Orders;
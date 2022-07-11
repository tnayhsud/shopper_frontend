import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from '../../context/CartProvider';
import CartItemList from "../CartItemList";
import CustomerInfo from "./ConsumerInfo";
import PaymentInfo from "./PaymentInfo";
import OrderService from "../../service/OrderService";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import UserService from "../../service/UserService";
import Alert from "../static/Alert";
import Loading from "../static/Loading";

function Checkout() {

    const ref = useRef();
    const navigate = useNavigate();

    let errorCount = 0;
    const [sum, setSum] = useState(0);
    const { data: cartData, setData: setCartData } = useContext(CartContext);
    const { data: userData } = useContext(AuthContext);
    const [data, setData] = useState({ "cartItems": [], "cartCount": 0 });
    const [addressList, setAddressList] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(-1);
    const [addressFormVisible, setAddressFormVisible] = useState(true);
    const [alert, setAlert] = useState({});
    const [loading, setLoading] = useState(false);

    const [consumerInfo, setConsumerInfo] = useState({
        firstName: { touched: false, value: "" },
        lastName: { touched: false, value: "" },
        email: { touched: false, value: "" },
        addressLine: { touched: false, value: "" },
        country: { touched: false, value: "" },
        city: { touched: false, value: "" },
        state: { touched: false, value: "" },
        zipCode: { touched: false, value: "" },
        isDefault: false
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardOwner: { touched: false, value: "" },
        cardNumber: { touched: false, value: "" },
        expiryDate: false,
        cvc: { touched: false, value: "" }
    });

    useEffect(() => {
        setData(cartData);
    }, [cartData]);

    useEffect(() => {
        setSum(data.cartItems.reduce(function (a, b) {
            return a + b.product.discountPrice * b.quantity;
        }, 0));
    }, [data.cartItems]);

    useEffect(() => {
        UserService.fetchAddressList(userData.user).then(res => {
            const list = res.data;
            setAddressList(list);
            if (list && list.length > 0) {
                setAddressFormVisible(false);
                for (let i = 0; i < list.length; i++) {
                    if (list[i].default) {
                        setConsumerInfo(list[i]);
                        setSelectedAddress(list[i].id);
                        return;
                    }
                }
            }
        }).catch(error => {
            throw error;
        })
    }, [userData.user]);

    const updateErrorCount = () => {
        errorCount = errorCount + 1;
    }

    function populateCustomerDataFromDatabase(data, touched) {
        setSelectedAddress(data.id);
        setConsumerInfo({
            firstName: { touched: touched, value: data.firstName },
            lastName: { touched: touched, value: data.lastName },
            email: { touched: touched, value: data.email },
            addressLine: { touched: touched, value: data.addressLine },
            country: { touched: touched, value: data.country },
            city: { touched: touched, value: data.city },
            state: { touched: touched, value: data.state },
            zipCode: { touched: touched, value: data.zipCode },
            isDefault: data.default
        });
    };

    function handleCustomerInfoChange(property, event) {
        const target = event.target;
        let value = target.value;
        if (target.type === "checkbox") {
            value = target.checked;
        }
        setConsumerInfo(prevState => ({
            ...prevState,
            [property]: property === "isDefault" ? value : {
                "touched": true,
                "value": value
            }
        }))
    };

    function handlePaymentInfoChange(property, event, date) {
        const target = event.target;
        setPaymentInfo(prevState => ({
            ...prevState,
            [property]: property === "expiryDate" ? date : {
                "touched": true,
                "value": target.value
            }
        }))
    };

    function validate(data, setState) {
        for (let i in data) {
            for (const key of Object.keys(data[i])) {
                if (!["isDefault", "expiryDate"].includes(data[i][key]) && data[i][key].value === "") {
                    data[i][key].touched = true;
                    updateErrorCount();
                }
            }
            setState[i](prevState => ({
                ...prevState,
                ...data[i]
            }));
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        validate([consumerInfo, paymentInfo], [setConsumerInfo, setPaymentInfo]);
        if (errorCount !== 0) {
            setAlert({
                show: true,
                type: "danger",
                text: "Please provide required information"
            });
        } else {
            setLoading(true);
            const orderItems = data.cartItems.map(item => ({
                "productId": item.productId,
                "price": item.discountPrice,
                "quantity": item.quantity
            }));
            const orderData = {
                "items": orderItems,
                "payment": paymentInfo.upi ? {
                    "method": "upi",
                    "upiAddress": paymentInfo.upi.value
                } : {
                    "method": "card",
                    "cardOwner": paymentInfo.cardOwner.value,
                    "cardNumber": parseInt(paymentInfo.cardNumber.value),
                    "expiryDate": paymentInfo.expiryDate.value
                },
                "address": {
                    "id": selectedAddress,
                    "firstName": consumerInfo.firstName.value,
                    "lastName": consumerInfo.lastName.value,
                    "email": consumerInfo.email.value,
                    "addressLine": consumerInfo.addressLine.value,
                    "city": consumerInfo.city.value,
                    "state": consumerInfo.state.value,
                    "country": consumerInfo.country.value,
                    "zipCode": parseInt(consumerInfo.zipCode.value),
                    "isDefault": consumerInfo.isDefault
                }
            }
            setTimeout(() => {
                OrderService.placeOrder(orderData, userData.user).then(res => {
                    console.log("Order placed");
                    setCartData({ "cartItems": [], "cartCount": 0 })
                    setLoading(false);
                    navigate("/orders");
                }).catch(() => {
                    console.log("Failed to place order.");
                });
            }, 5000)
        }
    }

    function handlePayment(event) {
        event.preventDefault();
        ref.current.click();
    }

    return (
        <div className="section-fluid-270" style={{ marginTop: "32px" }}>
            <div className="box-wrapper">
                <div className="container-fluid">
                    {cartData && cartData.cartItems && cartData.cartItems.length > 0 ? <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-xl-7 col-lg-7">
                            <form className="form checkout-form" onSubmit={handleSubmit}>
                                <Loading show={loading}></Loading>
                                <CustomerInfo
                                    addressList={addressList}
                                    info={consumerInfo}
                                    handleChange={handleCustomerInfoChange}
                                    populateCustomerData={populateCustomerDataFromDatabase}
                                    updateErrorCount={updateErrorCount}
                                    selectedAddress={selectedAddress}
                                    addressFormVisible={addressFormVisible}
                                    setAddressFormVisible={setAddressFormVisible}
                                />
                                <PaymentInfo info={paymentInfo} handleChange={handlePaymentInfoChange} setPaymentInfo={setPaymentInfo} />
                                <input ref={ref} hidden type="submit" value="Submit" />
                            </form>
                        </div>
                        <div className="col-xl-1 col-lg-1">
                        </div>
                        <div className="cart-info col-xl-4 col-lg-4 border p-4">
                            <CartItemList data={data} setData={setData} />
                            <div className="row border-top mt-4">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="d-flex justify-content-center">
                                        <div className="content">
                                            <button onClick={handlePayment} className="btn btn-primary btn-md">Confirm &amp; Pay <b className="title mx-1">₹ {sum}</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                        <div className="row">
                            <div className="d-flex col-xl-12 col-lg-12 flex-column align-items-center">
                                <div className="row">
                                    <h3>No items found in cart</h3>
                                </div>
                                <div className="row">
                                    <Link to="/">VIEW PRODUCTS</Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Alert alert={alert} setShow={setAlert} />
        </div >
    )
};

export default Checkout;
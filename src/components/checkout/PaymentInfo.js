import React, { useState } from "react";
import DatePicker from "react-datepicker";

function PaymentInfo(props) {

    const [paymentMethod, setPaymentMethod] = useState("card");

    const isInputValid = (cardNumber, len) => {
        return /^-?\d+$/.test(cardNumber) && cardNumber.length === len;
    };

    function onChangeValue(event) {
        const value = event.target.value;
        value === 'card' ? props.setPaymentInfo({
            cardOwner: { touched: false, value: "" },
            cardNumber: { touched: false, value: "" },
            expiryDate: false,
            cvc: { touched: false, value: "" }
        }) : props.setPaymentInfo({
            upi: { touched: false, value: "" }
        });
        setPaymentMethod(value);
    }

    return (
        <React.Fragment>
            <div className="info-title d-flex justify-content-between">
                <h4>Payment Data</h4>
            </div>
            <div className="d-flex row">
                <div className="col-lg-4 col-xl-4 field">
                    <span>
                        <input id="card" name="payment_method" type="radio" value="card" checked={paymentMethod === 'card'} onChange={e => onChangeValue(e)} />
                        <label>Credit/Debit</label>
                    </span>
                </div>
                <div className="col-lg-4 col-xl-4 field">
                    <span>
                        <input id="upi" name="payment_method" type="radio" value="upi" checked={paymentMethod === 'upi'} onChange={e => onChangeValue(e)} />
                        <label>UPI</label>
                    </span>
                </div>
            </div>
            {paymentMethod === "card" ? <><div className="d-flex row">
                <div className="col-lg-6 col-xl-6 field">
                    <input type="text"
                        style={{ border: props.info.cardOwner.touched && props.info.cardOwner.value === "" ? "1px solid red" : "1px solid #ced4da" }}
                        onBlur={e => props.handleChange("cardOwner", e)}
                        onChange={(e) => props.handleChange("cardOwner", e)}
                        placeholder="Card owner name"
                        value={props.info.cardOwner.value} />
                </div>
                <div className="col-lg-6 col-xl-6 field">
                    <input
                        type="number"
                        style={{ border: props.info.cardNumber.touched && (props.info.cardNumber.value === "" || !isInputValid(props.info.cardNumber.value, 16)) ? "1px solid red" : "1px solid #ced4da" }}
                        onBlur={e => props.handleChange("cardNumber", e)}
                        onChange={(e) => props.handleChange("cardNumber", e)}
                        placeholder="Card number"
                        value={props.info.cardNumber.value} />
                </div>
            </div>
                <div className="d-flex row">
                    <div className="col-lg-6 col-xl-6 field">
                        <div className="datePickerWidth">
                            <DatePicker
                                placeholderText={'Expiry date'}
                                selected={props.info.expiryDate}
                                onChange={(date, e) => props.handleChange("expiryDate", e, date)}
                                dateFormat="MMM yyyy"
                                showMonthYearPicker
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 field">
                        <input type="number"
                            style={{ border: props.info.cvc.touched && (props.info.cvc.value === "" || !isInputValid(props.info.cvc.value, 3)) ? "1px solid red" : "1px solid #ced4da" }}
                            onBlur={e => props.handleChange("cvc", e)}
                            onChange={(e) => props.handleChange("cvc", e)}
                            placeholder="CVV"
                            value={props.info.cvc.value} />
                    </div>
                </div>
            </> : <div className="d-flex row">
                <div className="col-lg-6 col-xl-6 field">
                    <input type="text"
                        style={{ border: props.info.upi.touched && props.info.upi.value === "" ? "1px solid red" : "1px solid #ced4da" }}
                        onBlur={e => props.handleChange("upi", e)}
                        onChange={(e) => props.handleChange("upi", e)}
                        placeholder="UPI address"
                        value={props.info.upi.value}
                        autoFocus />
                </div>
            </div>}
            <br></br>
        </React.Fragment >
    )
};

export default PaymentInfo;
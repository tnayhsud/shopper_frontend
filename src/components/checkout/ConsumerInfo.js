import React from "react";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const states = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"];

function CustomerInfo(props) {

    const isValidEmail = (email) => {
        const valid = email.match(EMAIL_REGEX);
        if (!valid) {
            props.updateErrorCount();
        }
        return valid;
    }

    const isInputValid = (cardNumber, len) => {
        return /^-?\d+$/.test(cardNumber) && cardNumber.length === len;
    };

    const toggleNewAddressForm = () => {
        if (!props.addressFormVisible) {
            const data = {
                "firstName": "",
                "lastName": "",
                "email": "",
                "addressLine": "",
                "city": "",
                "state": "",
                "country": "",
                "zipCode": "",
                "default": false
            }
            props.populateCustomerData(data, false);
        }
        props.setAddressFormVisible(!props.addressFormVisible);
    }

    return (
        <React.Fragment>
            <div className="info-title d-flex justify-content-between align-items-center">
                <h4>Customer Data</h4>
                {props.addressList && props.addressList.length !== 0 && !props.addressFormVisible && <p onClick={toggleNewAddressForm}>Add new address</p>}
            </div>
            {props.addressFormVisible && <>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-12 col-xl-12 field" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                            <input type="checkbox"
                                onChange={e => props.handleChange("isDefault", e)}
                                checked={props.info.isDefault} role="button" />
                            <label style={{ fontSize: "12px" }}>Set default address</label>
                        </div>
                        <button className="btn-danger btn-close btn-sm" onClick={e => props.setAddressFormVisible(false)} ></button>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-lg-4 col-xl-4 field">
                        <input name="firstName"
                            style={{ border: props.info.firstName.touched && props.info.firstName.value === "" ? "1px solid red" : "1px solid #ced4da" }}
                            onBlur={e => props.handleChange("firstName", e)}
                            onChange={e => props.handleChange("firstName", e)}
                            placeholder="First name"
                            type="text"
                            value={props.info.firstName.value}
                            autoFocus />
                    </div>
                    <div className="col-lg-4 col-xl-4 field">
                        <input name="lastName"
                            style={{ border: props.info.lastName.touched && props.info.lastName.value === "" ? "1px solid red" : "1px solid #ced4da" }}
                            onBlur={e => props.handleChange("lastName", e)}
                            onChange={e => props.handleChange("lastName", e)}
                            placeholder="Last name"
                            type="text"
                            value={props.info.lastName.value} />
                    </div>
                    <div className="col-lg-4 col-xl-4 field">
                        <input name="email"
                            style={{ border: props.info.email.touched && (props.info.email.value === "" || !isValidEmail(props.info.email.value)) ? "1px solid red" : "1px solid #ced4da" }}
                            onBlur={e => props.handleChange("email", e)}
                            onChange={e => props.handleChange("email", e)}
                            placeholder="Email"
                            type="text"
                            value={props.info.email.value} />
                    </div>
                </div>
                <div className="d-flex row">
                    <div className="col-lg-8 col-xl-8 field">
                        <input name="address"
                            style={{ border: props.info.addressLine.touched && props.info.addressLine.value === "" ? "1px solid red" : "1px solid #ced4da" }}
                            onBlur={e => props.handleChange("addressLine", e)}
                            onChange={e => props.handleChange("addressLine", e)}
                            placeholder="Address"
                            type="text"
                            value={props.info.addressLine.value} />
                    </div>
                    <div className="col-lg-4 col-xl-4 field">
                        <select
                            className="form-select"
                            style={{ border: props.info.country.touched && props.info.country.value === "" ? "1px solid red" : "1px solid #ced4da" }}
                            value={props.info.country.value}
                            onBlur={e => props.handleChange("country", e)}
                            onChange={e => props.handleChange("country", e)}
                        >
                            <option value="" disabled>Select country</option>
                            <option value="India">India</option>
                            <option value="Russia">Russia</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex row">
                    <div className="col-lg-4 col-xl-4 field">
                        <input name="town_city"
                            style={{ border: props.info.city.touched && props.info.city.value === "" ? "1px solid red" : "1px solid #ced4da" }}
                            onBlur={e => props.handleChange("city", e)}
                            onChange={e => props.handleChange("city", e)}
                            placeholder="Town/City"
                            type="text"
                            value={props.info.city.value} />
                    </div>
                    <div className="col-lg-4 col-xl-4 field">
                        <select className="form-select"
                            style={{ border: props.info.state.touched && props.info.state.value === "" ? "1px solid red" : "1px solid #ced4da" }}
                            value={props.info.state.value}
                            onBlur={e => props.handleChange("state", e)}
                            onChange={e => props.handleChange("state", e)}
                        >
                            <option value="" disabled>Select state</option>
                            {states.map(state => {
                                return <option value={state} key={state}>{state}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-lg-4 col-xl-4 field">
                        <input name="postal_zip_code"
                            style={{ border: props.info.zipCode.touched && (props.info.zipCode.value === "" || !isInputValid(props.info.zipCode.value, 6)) ? "1px solid red" : "1px solid #ced4da" }}
                            onBlur={e => props.handleChange("zipCode", e)}
                            onChange={e => props.handleChange("zipCode", e)}
                            placeholder="Zip code"
                            type="number"
                            value={props.info.zipCode.value} />
                    </div>
                </div>
            </>}
            {props.addressList && props.addressList.length > 0 &&
                <div>
                    <div className="row d-flex flex-wrap">
                        {props.addressList.map(address => {
                            return <div style={{ fontSize: "14px" }} className="col-lg-4 col-xl-4 field" key={`${address.id}${address.addressLine}`}>
                                <div className="d-flex justify-content-center">
                                    <input className="mt-1" name="address"
                                        type="radio"
                                        onChange={e => {
                                            props.setAddressFormVisible(false);
                                            props.populateCustomerData(address, true);
                                        }}
                                        value={props.selectedAddress}
                                        checked={address.id === props.selectedAddress}
                                        role="button" />
                                    <label>
                                        <b>{address.firstName} {address.lastName}</b>
                                        <p>{address.addressLine} {address.city}, {address.state}, {address.country} - {address.zipCode}</p>
                                    </label>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            }
            <br></br>
        </React.Fragment>
    )
};

export default CustomerInfo;
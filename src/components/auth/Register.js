import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';
import Alert from "../static/Alert";
import './Auth.css';

function Register() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        "name": "",
        "email": "",
        "password": ""
    });
    const [alert, setAlert] = useState({});

    const handleChange = (e, type) => {
        const target = e.target;
        setData(prevState => ({
            ...prevState,
            [type]: target.value
        }))
    };

    const registerHandler = () => {
        const user = {
            "name": data.name,
            "email": data.email,
            "password": data.password
        }
        UserService.create(user).then(res => {
            if (res && res.status === 201) {
                setAlert({ show: true, "type": "success", text: "User created successfully" });
                navigate("/login");
            } else {
                setAlert({ show: true, "type": "danger", text: "Some error occured" });
            }
        }).catch(error => {
            setAlert({ show: true, "type": "danger", text: error.message });
        });
    };

    return (
        <div id="auth-modal">
            <div className="auth-box">
                <h2>Register</h2>
                <input id="r-name" type="text" placeholder="Enter full name" onChange={e => handleChange(e, "name")} /><br></br>
                <input id="r-email" type="text" placeholder="Enter email id" onChange={e => handleChange(e, "email")} />
                <input id="r-password" type="password" placeholder="Enter secure password" onChange={e => handleChange(e, "password")} />

                <button id="register-btn" className="btn btn-primary" onClick={registerHandler}>
                    Register
                </button>
                <span>
                    Already have an Account?
                    <Link to="/login" id="register-now"> Login now</Link>
                </span>
            </div>
            <Alert alert={alert} setShow={setAlert}></Alert>
        </div>
    );
}

export default Register;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider';
import UserService from '../../service/UserService';
import Alert from "../static/Alert";
import './Auth.css';

function Login() {
    const navigate = useNavigate();
    const route = useLocation().pathname;
    const { data, setData } = useContext(AuthContext);
    const [loginCredentials, setLoginCredentials] = useState({
        "email": "",
        "password": ""
    });
    const [alert, setAlert] = useState({});

    useEffect(() => {
        if (route === "/login" && data.loggedIn) navigate("/");
    }, [data, route, navigate]);

    const handleChange = (e, type) => {
        const target = e.target;
        setLoginCredentials(prevState => ({
            ...prevState,
            [type]: target.value
        }))
    };

    const loginHandler = () => {
        const user = {
            "email": loginCredentials.email,
            "password": loginCredentials.password
        }
        UserService.login(user).then(res => {
            if (res && res.status === 200) {
                const token = res.headers["authorization"];
                const userData = res.data;
                setData({
                    "user": {
                        "name": userData.name,
                        "email": userData.email,
                        "token": token
                    },
                    "loggedIn": true
                });
                navigate("/");
            } else {
                setAlert({ show: true, "type": "danger", text: "Please check if user exists or provide correct credentials" });
            }
        }).catch(() => {
            setAlert({ show: true, "type": "danger", text: "Please check if user exists or provide correct credentials" });
        });
    };

    return (
        !data.loggedIn && <div id="auth-modal">
            <div className="auth-box">
                <h2>Login</h2>
                <input id="l-email" type="text" placeholder="Enter email id" onChange={e => handleChange(e, "email")} /> <br></br>
                <input id="l-password" type="password" placeholder="Enter password" onChange={e => handleChange(e, "password")} />

                <button id="login-btn" className="btn btn-primary" onClick={loginHandler}>
                    Login
                </button>
                {/* <button className="btn btn-secondary">
                    Forgotten password?
                </button> */}
                <span>
                    Don't have an account?
                    <Link to="/register" id="register-now"> Register here</Link>
                </span>
            </div>
            <Alert alert={alert} setShow={setAlert}></Alert>
        </div>
    );
}

export default Login;
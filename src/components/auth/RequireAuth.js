import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

function RequireAuth() {
    let { data } = useContext(AuthContext);
    let location = useLocation();

    if (!data || !data.loggedIn) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
};

export default RequireAuth;
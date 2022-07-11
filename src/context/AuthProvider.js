import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({
    "user": {},
    "loggedIn": false
});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")) || {
        "user": {},
        "loggedIn": false
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(data));
    }, [data]);

    return (
        <AuthContext.Provider value={{ data, setData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
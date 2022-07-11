import React, { useContext, useEffect, useState } from "react";
import CartService from "../service/CartService";
import { AuthContext } from "./AuthProvider";

export const CartContext = React.createContext({
    "cartItems": [],
    "count": 0
});

const CartProvider = ({ children }) => {
    const { data: userData } = useContext(AuthContext);

    const [data, setData] = useState({
        "cartItems": [],
        "cartCount": 0
    });

    useEffect(() => {
        if (userData && userData.loggedIn) {
            CartService.getCart(userData.user).then(res => {
                if (res.data.error === "") {
                    setData({ "cartItems": res.data.data, "cartCount": res.data.data.length });
                } else {
                    setData({ "cartItems": [], "cartCount": 0 });
                }
            }).catch(error => {
                setData({ "cartItems": [], "cartCount": 0 });
                throw error;
            });
        }
    }, [userData]);

    return (
        <CartContext.Provider value={{ data, setData }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
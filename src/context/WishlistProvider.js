import React, { useContext, useEffect, useState } from "react";
import WishlistService from "../service/WishlistService";
import { AuthContext } from "./AuthProvider";

export const WishlistContext = React.createContext({
    "wishlistItems": [],
    "wsCount": 0
});

const WishlistProvider = ({ children }) => {

    const { data: userData } = useContext(AuthContext);

    const [data, setData] = useState({
        "wishlistItems": [],
        "wsCount": 0
    });

    useEffect(() => {
        if (userData && userData.loggedIn) {
            WishlistService.getWishlist(userData.user).then(res => {
                if (res.data.error === "") {
                    setData({ "wishlistItems": res.data.data, "wsCount": res.data.data.length });
                } else {
                    setData({ "wishlistItems": [], "wsCount": 0 });
                }
            }).catch(error => {
                setData({ "wishlistItems": [], "wsCount": 0 });
                throw error;
            });
        }
    }, [userData]);

    return (
        <WishlistContext.Provider value={{ data, setData }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistProvider;
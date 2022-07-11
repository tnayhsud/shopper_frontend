import axios from "axios";
const SERVER = "http://localhost:8083";

const WishlistService = {
    updateWishlist: async (payload) => {
        const URI = `${SERVER}/wishlist/items`;
        const data = JSON.parse(localStorage.getItem("user"))
        return await axios.post(URI, payload, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${data.user.token}`
            }
        });
    },
    getWishlist: async (user) => {
        const URI = `${SERVER}/wishlist/items`;
        return await axios.get(URI, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        });
    },
    invokeWishlistUpdateAction: (productId, quantity, setData, setAlert, message) => {
        let data = {
            "productId": productId,
            "quantity": quantity
        };
        WishlistService.updateWishlist(data).then(res => {
            if (res.data.error === "") {
                setData({ "wishlistItems": res.data.data, "wsCount": res.data.data.length });
                setAlert({ show: true, "type": "success", text: message });
            } else {
                setAlert({ show: true, "type": "danger", text: res.data.error });
            }
        }).catch(error => {
            setAlert({ show: true, "type": "danger", text: error.message });
        });
    }
};

export default WishlistService;
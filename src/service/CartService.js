import axios from "axios";
const SERVER = "http://localhost:8083";

const CartService = {
    updateCart: async (payload) => {
        const URI = `${SERVER}/cart/items`;
        const data = JSON.parse(localStorage.getItem("user"))
        return await axios.post(URI, payload, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${data.user.token}`
            }
        });
    },
    getCart: async (user) => {
        const URI = `${SERVER}/cart/items`;
        return await axios.get(URI, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        });
    },
    invokeCartUpdateAction: (pid, quantity, setData, setAlert, message) => {
        let data = {
            "productId": pid,
            "quantity": quantity
        };
        CartService.updateCart(data).then(res => {
            if (res.data.error === "") {
                setData({ "cartItems": res.data.data, "cartCount": res.data.data.length });
                setAlert({ show: true, "type": "success", text: message });
            } else {
                setAlert({ show: true, "type": "danger", text: res.data.error });
            }
        }).catch(error => {
            setAlert({ show: true, "type": "danger", text: error.message });
        });
    }
};

export default CartService;
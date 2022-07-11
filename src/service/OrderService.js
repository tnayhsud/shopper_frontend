import axios from "axios";
const SERVER = "http://localhost:8083";

const OrderService = {
    placeOrder: async (orderData, user) => {
        const URI = `${SERVER}/order`;
        return await axios.post(URI, orderData, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        });
    },
    getOrders: async (user) => {
        const URI = `${SERVER}/orders`;
        return await axios.get(URI, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        });
    }
};

export default OrderService;
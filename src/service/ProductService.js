import axios from "axios";
const SERVER = "http://localhost:8083";

const ProductService = {
    getProducts: async (type) => {
        const URI = `${SERVER}/products?gender=${type}`;
        return await axios.get(URI, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    },
    getProduct: async (id) => {
        const URI = `${SERVER}/products/${id}`;
        return await axios.get(URI, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    }
};

export default ProductService;
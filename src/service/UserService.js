import axios from "axios";
const SERVER = "http://localhost:8083";

const UserService = {
    create: async (user) => {
        const URI = `${SERVER}/user/register`;
        return await axios.post(URI, user, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    },
    login: async (user) => {
        const URI = `${SERVER}/login`;
        return await axios.post(URI, user, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    },
    fetchAddressList: async (user) => {
        const URI = `${SERVER}/user/address`;
        return await axios.get(URI, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        });
    }
};

export default UserService;
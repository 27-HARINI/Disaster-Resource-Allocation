import axios from "axios";

const api = axios.create({
    baseURL: "https://disaster-resource-allocation-production.up.railway.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
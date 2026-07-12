import axios from "axios";

const API = "https://disaster-resource-allocation-production.up.railway.app";

export const loginUser = (data) => axios.post(`${API}/login`, data);

export const registerUser = (data) => axios.post(`${API}/register`, data);
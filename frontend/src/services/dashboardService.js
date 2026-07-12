import axios from "axios";

const API = "https://disaster-resource-allocation-production.up.railway.app";

export const getDashboardData = () => axios.get(API);
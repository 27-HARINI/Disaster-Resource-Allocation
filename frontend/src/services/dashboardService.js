import axios from "axios";

const API = "https://disaster-resource-allocation-production.up.railway.app/api/dashboard";

export const getDashboardData = () => axios.get(API);
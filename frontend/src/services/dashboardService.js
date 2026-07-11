import axios from "axios";

const API = "http://localhost:8080/api/dashboard";

export const getDashboardData = () => axios.get(API);
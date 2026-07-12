import axios from "axios";

const API = "https://disaster-resource-allocation-production.up.railway.app/api/disasters";

export const getDisasters = () => axios.get(API);

export const getDisaster = (id) =>
    axios.get(`${API}/${id}`);

export const addDisaster = (data) =>
    axios.post(API, data);

export const updateDisaster = (id, data) =>
    axios.put(`${API}/${id}`, data);

export const deleteDisaster = (id) =>
    axios.delete(`${API}/${id}`);
import axios from "axios";

const API = "http://localhost:8080/api/allocations";

export const getAllocations = () => axios.get(API);

export const addAllocation = (data) => axios.post(API, data);

export const updateAllocation = (id, data) =>
    axios.put(`${API}/${id}`, data);

export const deleteAllocation = (id) =>
    axios.delete(`${API}/${id}`);
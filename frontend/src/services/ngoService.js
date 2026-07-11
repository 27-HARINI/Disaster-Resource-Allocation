import axios from "axios";

const API = "http://localhost:8080/api/ngos";

export const getNgos = () => axios.get(API);

export const addNgo = (data) => axios.post(API, data);

export const updateNgo = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteNgo = (id) => axios.delete(`${API}/${id}`);
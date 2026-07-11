import axios from "axios";

const API = "http://localhost:8080/api/shelters";

export const getShelters = () => axios.get(API);

export const addShelter = (data) => axios.post(API, data);

export const updateShelter = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteShelter = (id) => axios.delete(`${API}/${id}`);
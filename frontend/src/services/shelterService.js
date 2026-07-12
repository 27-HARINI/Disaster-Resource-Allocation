import axios from "axios";

const API = "https://disaster-resource-allocation-production.up.railway.app/api/shelters";

export const getShelters = () => axios.get(API);

export const addShelter = (data) => axios.post(API, data);

export const updateShelter = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteShelter = (id) => axios.delete(`${API}/${id}`);
import axios from "axios";

const API = "https://disaster-resource-allocation-production.up.railway.app/api/volunteers";

export const getVolunteers = () => axios.get(API);

export const addVolunteer = (data) => axios.post(API, data);

export const updateVolunteer = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteVolunteer = (id) => axios.delete(`${API}/${id}`);
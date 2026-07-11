import axios from "axios";

const API="http://localhost:8080/api/resources";

export const getResources=()=>axios.get(API);

export const addResource=(data)=>axios.post(API,data);

export const updateResource=(id,data)=>axios.put(`${API}/${id}`,data);

export const deleteResource=(id)=>axios.delete(`${API}/${id}`);
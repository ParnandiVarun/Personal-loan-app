import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api/loans" });

export const getMyLoans = () => API.get("/my");
export const getLoanById = (id) => API.get(`/${id}`);

import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api/payments" });

export const makePayment = (loanId, data) => API.post(`/${loanId}`, data);
export const getPayments = (loanId) => API.get(`/${loanId}`);

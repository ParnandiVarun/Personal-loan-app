import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/applications" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const createApplication = (data) => API.post("/", data);
export const updateApplication = (id, data) => API.put(`/${id}`, data);
export const submitApplication = (id) => API.put(`/${id}/submit`);
export const getMyApplications = () => API.get("/my");

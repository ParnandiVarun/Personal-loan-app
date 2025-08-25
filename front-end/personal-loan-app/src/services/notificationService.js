import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000/api/notifications",
});

export const getMyNotifications = () => API.get("/my");

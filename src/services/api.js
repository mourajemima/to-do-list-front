import axios from "axios";

const baseURL = "https://to-do-list-back-jxzd.onrender.com" || "http://localhost:3000";

const api = axios.create({
  baseURL,
});

export default api;

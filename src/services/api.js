import axios from "axios";

// Agora só usamos process.env
const baseURL = "https://to-do-list-back-jxzd.onrender.com" || "http://localhost:3000";

const api = axios.create({
  baseURL,
});

export default api;

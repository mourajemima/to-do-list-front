import axios from "axios";

// Agora só usamos process.env
const baseURL = process.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL,
});

export default api;

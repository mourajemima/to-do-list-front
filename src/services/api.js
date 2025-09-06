import axios from "axios";

const api = axios.create({
    baseURL: 'https://to-do-list-back-jxzd.onrender.com'
});

export default api
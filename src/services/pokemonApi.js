import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44390",
});

export default api;

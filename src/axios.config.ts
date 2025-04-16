import Axios from "axios";
const axios = Axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://waste-to-wealth-server.vercel.app",
  withCredentials: true,
});

export default axios;

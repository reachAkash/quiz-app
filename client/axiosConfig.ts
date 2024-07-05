import axios from "axios";
import { config } from "process";

const productionUrl = "https://quiz-app-akash.vercel.app";
const developmentUrl = "http://localhost:3000";
const production = false;
const axiosInstance = axios.create({
  baseURL: production ? productionUrl : developmentUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

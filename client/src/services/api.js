import axios from "axios";

const API = axios.create({
  baseURL: "https://rproject-1-p9k4.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;

import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default client;

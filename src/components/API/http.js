import axios from "axios";

export const http = axios.create({
  baseURL: "http://95.85.122.78:9090/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

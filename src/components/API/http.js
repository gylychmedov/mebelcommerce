import axios from "axios";

export const http = axios.create({
  baseURL: "http://15.236.60.175:80/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

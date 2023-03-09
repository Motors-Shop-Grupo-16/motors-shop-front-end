import axios from "axios";

export const api = axios.create({
  baseURL: "https://motors-shop-api.vercel.app/",
  timeout: 15000,
});

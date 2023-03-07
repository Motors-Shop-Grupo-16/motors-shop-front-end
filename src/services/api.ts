import axios from "axios";

// export const api = axios.create({
//   baseURL: "https://motors-shop-api.vercel.app/",
//   timeout: 10000,
// });

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

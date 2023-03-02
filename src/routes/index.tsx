import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/product" element={<ProductDetail />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);

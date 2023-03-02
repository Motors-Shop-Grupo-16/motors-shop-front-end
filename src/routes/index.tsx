import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/product" element={<ProductDetail />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);

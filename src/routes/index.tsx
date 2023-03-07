import { Navigate, Route, Routes } from "react-router-dom";
import { ProductDetail } from "../pages/ProductDetail";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";
import { Advertiser } from "../pages/Advertiser";
import { Error404 } from "../pages/Error404";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/product" element={<ProductDetail />} />
    <Route path="/advertiser" element={<Advertiser />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);

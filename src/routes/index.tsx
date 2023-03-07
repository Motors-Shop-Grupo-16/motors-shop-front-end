import { Route, Routes } from "react-router-dom";
import { Advertiser } from "../pages/Advertiser";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ProductDetail } from "../pages/ProductDetail";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";

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

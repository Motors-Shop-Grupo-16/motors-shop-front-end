import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
export const RoutesMain = () => (
  <Routes>
    <Route path="*" element={<Navigate replace to="/" />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

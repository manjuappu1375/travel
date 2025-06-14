import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;

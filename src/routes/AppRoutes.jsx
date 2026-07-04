import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateResume from "../pages/Resume/CreateResume";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/create-resume"
          element={<CreateResume />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
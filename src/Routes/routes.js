import { Routes, Route } from "react-router-dom";
import Dashboard from "../Screen/Dashboard/Dashboard";

export const AuthRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to={"/login"} replace />} />
      <Route path="/login" element={<Login title={"Login"} />} /> */}
      <Route path="/dashboard" element={<Dashboard title={"Dashboard"} />} />
    </Routes>
  );
};

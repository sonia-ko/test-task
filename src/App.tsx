import EmployeesPage from "./pages/EmployessPage/EmployeesPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees" />} />
      <Route path="/employees" element={<EmployeesPage />} />
    </Routes>
  );
}

export default App;

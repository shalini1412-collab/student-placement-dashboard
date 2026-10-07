import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/interviews" element={<Interviews />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
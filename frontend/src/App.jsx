import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Timeline from "./pages/Timeline";
import CaptureMemory from "./pages/CaptureMemory";
import Alerts from "./pages/Alerts";
import ChatPage from "./pages/ChatPage";
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/capture" element={<CaptureMemory />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
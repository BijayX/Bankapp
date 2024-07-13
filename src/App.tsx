import { Route, Routes, useLocation } from "react-router-dom";
import LandingPages from "./pages/LandingPages";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import EmailVerification from "./pages/auth/Verification/EmailVerification";
import Dashboard from "./pages/Dasboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./components/Siderbar/Siderbar";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const location = useLocation();

  const isDashboardOrProfile = location.pathname === '/page-Dashboard' || location.pathname === '/profile';

  return (
    <div className="flex h-screen px-10 bg-bgcolor ">
      {isDashboardOrProfile && <Sidebar />}
      <div className={`flex-1 flex flex-col overflow-hidden ${isDashboardOrProfile}`}>
        {isDashboardOrProfile && <Navbar />}
        <main className="flex-1 overflow-x-hidden overflow-y-auto  p-6">
          <Routes>
            <Route path="/" element={<LandingPages />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/verify" element={<EmailVerification />} />
            <Route path="/page-Dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;

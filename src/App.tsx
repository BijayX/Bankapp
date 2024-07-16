import { Route, Routes } from "react-router-dom";
import LandingPages from "./pages/LandingPages";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import EmailVerification from "./pages/auth/Verification/EmailVerification";
import Profile from "./pages/Profile/Profile";
import Account from "./pages/Accounts/Account";
import Layout from "./components/Loyout";
import Dashboard from "./pages/Dasboard/Dashboard";
import TranscationsPage from "./pages/Transcations/TranscationsPage";
import NotFound from "./pages/NotFound/Notfound";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/verify" element={<EmailVerification />} />
      <Route element={<Layout />}>
        <Route path="/page-dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/page-transactions" element={<TranscationsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPages from "./pages/LandingPages"
import Login from "./pages/auth/Login/Login"
import Register from "./pages/auth/Register/Register"
import EmailVerification from "./pages/auth/Verification/EmailVerification"
import Dashboard from "./pages/Dasboard/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/auth/register" element={<Register/>} />
          <Route path="/auth/verify" element={<EmailVerification/>} />
          <Route path="/page-Dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
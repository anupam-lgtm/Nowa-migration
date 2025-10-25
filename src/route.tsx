import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./screeen/Auth/login";
import SignUp from "./screeen/Auth/signUp";
import Dashboard from "./screeen/Dashboard";
import MainDashboard from "./screeen/Dashboard/dashboard";
import OtpScreen from "./screeen/Auth/otp";
import Forget from "./screeen/Auth/forget";
import NewPassword from "./screeen/Auth/create-new-password";
import MarketPage from "./screeen/market";
import NowaMigration from "./screeen/Nowa";

function RouteCom() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<NowaMigration />} />
        {/* <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpScreen />} />
        <Route path="/forgot" element={<Forget />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main-dashboard" element={<MainDashboard />} />
        <Route path="/market" element={<MarketPage />} /> */}
      </Routes>
    </Router>
  );
}

export default RouteCom;

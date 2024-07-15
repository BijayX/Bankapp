import React, { useEffect, useState } from 'react';
import { BiGridAlt, BiCreditCard, BiTransfer, BiUser, BiLogOut } from 'react-icons/bi';
import logo from "../../assets/logo.png";
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState(""); 
  const location = useLocation(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/page-Dashboard") {
      setActiveLink("page-Dashboard");
    } else if (location.pathname === "/accounts") {
      setActiveLink("accounts");
    } else if (location.pathname === "/page-transcations") {
      setActiveLink("page-transcations");
    } else if (location.pathname === "/profile") {
      setActiveLink("profile");
    } else {
      setActiveLink(""); 
    }
  }, [location.pathname]);

  return (
    <div className="bg-bgcolor w-64 flex flex-col justify-between py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div>
        <div className="flex items-center space-x-2 px-4">
          <img src={logo} alt="Reen Bank" className="h-9 w-15" />
        </div>
        <nav className="py-12">
          <a 
            onClick={() => navigate("/page-Dashboard")} 
            className={`block py-2.5 px-4 text-txtcol font-bold transition duration-200 ${activeLink === "page-Dashboard" ?  "text-[#32c48c]" : ""} `}
          >
            <BiGridAlt className="inline-block mr-2 text-2xl" /> Overview
          </a>
          <a 
            onClick={() => navigate("/accounts")} 
            className={`block py-2.5 px-4 text-txtcol font-bold transition duration-200 ${activeLink === "accounts" ? "text-[#32c48c]" : ""}`}
          >
            <BiCreditCard className="inline-block mr-2 text-2xl" /> Accounts
          </a>
          <a 
            onClick={() => navigate("/page-transcations")} 
            className={`block py-2.5 px-4 text-txtcol font-bold transition duration-200 ${activeLink === "page-transcations" ? "text-[#32c48c]" : ""} `}
          >
            <BiTransfer className="inline-block mr-2 text-2xl" /> Transactions
          </a>
          <a 
            onClick={() => navigate("/profile")} 
            className={`block py-2.5 px-4 text-txtcol font-bold transition duration-200 ${activeLink === "profile" ? "text-[#32c48c]" : ""}`}
          >
            <BiUser className="inline-block mr-2 text-2xl" /> Profile
          </a>
        </nav>
      </div>
      <div className="py-6 mr-6">
        <button className="flex items-center py-2.5 px-4 w-full rounded transition duration-200 hover:bg-red-500 hover:text-white">
          <BiLogOut className="inline-block mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

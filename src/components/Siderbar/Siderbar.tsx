import React, { useEffect, useState } from 'react';
import { BiGridAlt, BiCreditCard, BiTransfer, BiUser, BiLogOut } from 'react-icons/bi';
import logo from "../../assets/logo.png";
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize activeLink based on location.pathname
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    // Update activeLink whenever location.pathname changes
    setActiveLink(location.pathname);
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
            className={`block py-2.5 px-4 text-txtcol font-bold  ${activeLink === "/page-Dashboard" ? "text-[#33b888]" : ""}`}
          >
            <BiGridAlt className="inline-block mr-2 text-2xl" /> Overview
          </a>
          <a 
            onClick={() => navigate("/accounts")} 
            className={`block py-2.5 px-4 text-txtcol font-bold  ${activeLink === "/accounts" ? "text-[#33b888]" : ""}`}
          >
            <BiCreditCard className="inline-block mr-2 text-2xl" /> Accounts
          </a>
          <a 
            onClick={() => navigate("/page-transcations")} 
            className={`block py-2.5 px-4 text-txtcol font-bold  ${activeLink === "/page-transcations" ? "text-[#33b888]" : ""}`}
          >
            <BiTransfer className="inline-block mr-2 text-2xl" /> Transactions
          </a>
          <a 
            onClick={() => navigate("/profile")} 
            className={`block py-2.5 px-4 text-txtcol font-bold  ${activeLink === "/profile" ? "text-[#33b888]" : ""}`}
          >
            <BiUser className="inline-block mr-2 text-2xl" /> Profile
          </a>
        </nav>
      </div>
      <div className="py-6 mr-6">
        <button className="flex items-center py-2.5 px-4 w-full font-bold rounded transition duration-200 text-txtcol hover:text-red-600">
          <BiLogOut className="inline-block mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

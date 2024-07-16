import React from 'react';
import { BiGridAlt, BiCreditCard, BiTransfer, BiUser, BiLogOut } from 'react-icons/bi';
import logo from "../../assets/logo.png";
import {  NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {

  return (
    <div className="bg-bgcolor w-64 flex flex-col justify-between py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div>
        <div className="flex items-center space-x-2 px-4">
          <img src={logo} alt="Reen Bank" className="h-9 w-15" />
        </div>
        <nav className="py-12">
          <NavLink
            to="/page-dashboard"
            className={({ isActive }) =>
              `block py-2.5 px-4 text-txtcol font-bold ${isActive ? "!text-bg-gcolor" : ""}`
            }
          >
            <BiGridAlt className="inline-block mr-2 text-2xl" /> Overview
          </NavLink>
          <NavLink
            to="/accounts"
            className={({ isActive }) =>
              `block py-2.5 px-4 text-txtcol font-bold ${isActive ? "!text-bg-gcolor" : ""}`
            }
          >
            <BiCreditCard className="inline-block mr-2 text-2xl" /> Accounts
          </NavLink>
          <NavLink
            to="/page-transactions"
            className={({ isActive }) =>
              `block py-2.5 px-4 text-txtcol font-bold ${isActive ? "!text-bg-gcolor" : ""}`
            }
          >
            <BiTransfer className="inline-block mr-2 text-2xl" /> Transactions
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block py-2.5 px-4 text-txtcol font-bold ${isActive ? "!text-bg-gcolor" : ""}`
            }
          >
            <BiUser className="inline-block mr-2 text-2xl" /> Profile
          </NavLink>
        </nav>
      </div>
      <div className="py-6 mr-6">
        <button 
          className="flex items-center py-2.5 px-4 w-full font-bold rounded transition duration-200 text-txtcol hover:text-red-600"
        >
          <BiLogOut className="inline-block mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import { BiGridAlt, BiCreditCard, BiTransfer, BiUser, BiLogOut } from 'react-icons/bi';
import logo from "../../assets/logo.png"

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4">
        <img src={logo} alt="Reen Bank" className="h-9 w-15" />
      </div>
      <nav>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white">
          <BiGridAlt className="inline-block mr-2" /> Overview
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white">
          <BiCreditCard className="inline-block mr-2" /> Accounts
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white">
          <BiTransfer className="inline-block mr-2" /> Transactions
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white">
          <BiUser className="inline-block mr-2" /> Profile
        </a>
      </nav>
      <div className="px-4 mt-auto">
        <button className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-white">
          <BiLogOut className="inline-block mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
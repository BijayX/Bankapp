import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai'; // Example icon for the eye icon
import logo from ".././assets/image 32.png"

const AccountOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg mb-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Current Account Balance</h2>
        <div className="flex items-center space-x-4">
          <AiOutlineEye className="text-gray-600 cursor-pointer" size={24} />
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-600 mr-2" size={18} />
            <input
              type="text"
              placeholder="Feb 22 - Mar 21, 2023"
              className="bg-gray-100 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>
      <div className="bg-green-100 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="RB Logo" className="w-12 h-12 mr-4" />
          <div>
            <p className="text-2xl font-bold">₦ 44,500.00</p>
            <p className="text-sm text-gray-600">Current Balance</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold text-green-600">₦ 54,500.00</p>
          <p className="text-sm text-gray-600">Income</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold text-red-600">₦ 10,000.00</p>
          <p className="text-sm text-gray-600">Expense</p>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;

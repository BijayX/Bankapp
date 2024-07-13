import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../assets/image 32.png';

const AccountOverview: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <div className="bg-bgcolor rounded-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Current Account Balance</h2>
        <div className="flex items-center space-x-4">
          <div className="border rounded-md bg-[#F0F0F0] p-2 flex justify-center items-center">
            <button onClick={() => setBalanceVisible(!balanceVisible)}>
              {balanceVisible ? (
                <AiOutlineEye className="text-gray-600 cursor-pointer" size={16} />
              ) : (
                <AiOutlineEyeInvisible className="text-gray-600 cursor-pointer" size={16} />
              )}
            </button>
          </div>
          <div className="flex items-center border  border-[#F0F0F0] rounded-lg bg-[#F0F0F0]">
            <FaCalendarAlt className="text-gray-600 mr-2 ml-2" size={18} />
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              dateFormat="MMM d, yyyy"
              className="bg-gray-100 py-1 px-2 focus:outline-none  focus:ring-green-500 cursor-pointer"
              wrapperClassName="cursor-pointer"
              popperPlacement="bottom-end"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#D4F3E7] rounded-lg p-6 px-10 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="RB Logo" className="w-12 h-12 mr-2" />
        </div>
        <div className="text-center p-4">
          <p className="font-medium text-blueis text-left">Current Balance</p>
          <p className="text-2xl font-bold min-w-[150px]">
            {balanceVisible ? '₦ 44,500.00' : 'XXXXXXXXX'}
          </p>
        </div>
        <div className="text-center">
          <p className="font-medium text-blueis text-left">Income</p>
          <p className="text-2xl font-semibold min-w-[150px]">
            {balanceVisible ? '₦ 54,500.00' : 'XXXXXXXXX'}
          </p>
        </div>
        <div className="text-center">
          <p className="font-medium text-blueis text-left">Expense</p>
          <p className="text-2xl font-semibold min-w-[150px]">
            {balanceVisible ? '₦ 10,000.00' : 'XXXXXXXXX'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
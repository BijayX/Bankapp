import React, { useState } from 'react';
import logo from '../assets/image 32.png';
import MonthSelector from './MonthSelector/MonthSelector';

const Statistics: React.FC = () => {
  // Define the state for the selected month
  const [selectedOption, setSelectedOption] = useState('This Month');

  // Define the handleChange function
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Statistics</h2>
        <MonthSelector
          onChange={handleChange}
          currentMonth={selectedOption}
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-1/4 flex items-center space-x-6">
            <img src={logo} alt="Company Logo" className="w-8 h-8" />
            <span className='font-bold text-[#555555]'>Income</span>
          </div>
          <div className="w-1/2 bg-green-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full"></div>
          </div>
          <div className="w-1/4 text-right font-bold text-[#555555]">₦ 54,500.00</div>
        </div>
        <div className="flex items-center">
          <div className="w-1/4 flex items-center space-x-6">
            <img src={logo} alt="Company Logo" className="w-8 h-8" />
            <span className='font-bold text-[#555555]'>Expense</span>
          </div>
          <div className="w-1/2 bg-red-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full"></div>
          </div>
          <div className="w-1/4 text-right font-bold text-[#555555]">₦ 10,000.00</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
